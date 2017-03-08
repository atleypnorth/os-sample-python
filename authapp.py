from io import StringIO, BytesIO
import os
from flask import Flask, render_template, session, \
    abort, request

from flask_sqlalchemy import SQLAlchemy, orm
from flask_login import LoginManager, UserMixin
from flask_bootstrap import Bootstrap
import string
import random
import pyqrcode
from cryptography.fernet import Fernet
import logging
import json
from flask.json import jsonify
import base64

from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding
from cryptography.hazmat.backends import default_backend


_logger = logging.getLogger(__name__)
# create application instance
app = Flask(__name__)
application = app

# initialize extensions
bootstrap = Bootstrap(app)
db = SQLAlchemy(app)
lm = LoginManager(app)


class User(UserMixin, db.Model):
    """User model."""
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True)
    otp_secret = db.Column(db.String(16, convert_unicode=False))
    phone_imei = db.Column(db.String(60))
    fer = None

    def __init__(self, **kwargs):
        super(User, self).__init__(**kwargs)
        if self.otp_secret is None:
            # generate a random secret
            self.otp_secret = Fernet.generate_key()[:16]
        # self.fer = Fernet(self.otp_secret)
        self.phone_imei = kwargs.get('phone_imei')
        self.backend = default_backend()

    @orm.reconstructor
    def init_on_load(self):
        # self.fer = Fernet(self.otp_secret)
        self.backend = default_backend()

    def no_encrypt(self, data):
        return data

    def no_decrypt_bytes(self, data, iv=None):
        return data.decode() 

    def aes_encrypt(self, data):
        iv = os.urandom(16)
        padder = padding.PKCS7(algorithms.AES.block_size).padder()
        padded_data = padder.update(data.encode()) + padder.finalize()
        cipher = Cipher(algorithms.AES(self.otp_secret), modes.CBC(iv), backend=self.backend)
        encryptor = cipher.encryptor()
        ct = encryptor.update(padded_data) + encryptor.finalize()
        print(ct)
        token = base64.urlsafe_b64encode(ct)
        print(token)
        return (token.decode(), iv)
        # return self.fer.encrypt(data.encode()).decode()

    def decrypt(self, data, iv=None):
        return self.decrypt_bytes(data.encode(), iv)

    encrypt = no_encrypt

    def aes_decrypt_bytes(self, token, iv):
        print(token)
        data = base64.urlsafe_b64decode(token)
        print(data)
        unpadder = padding.PKCS7(algorithms.AES.block_size).unpadder()
        unpadded = unpadder.update(data) + unpadder.finalize()
        cipher = Cipher(algorithms.AES(self.otp_secret), modes.CBC(iv), backend=self.backend)
        decryptor = cipher.decryptor()
        ct = decryptor.update(unpadded) + decryptor.finalize()
        return ct.decode()
        # return self.fer.decrypt(data).decode()

    decrypt_bytes = no_decrypt_bytes


@app.route('/register', methods=['POST'])
def register_app():
    if 'username' not in request.form:
        _logger.error('Username not in request')
        abort(404)
    command = request.form.get('command', 'REGISTER')
    if command == 'REGISTER':
        user = User.query.filter_by(username=request.form['username']).first()
        if user is not None:
            _logger.error('Username already registered.')
            abort(404)

        # check auth at this point ...
        # add new user to the database
        user = User(username=request.form['username'])
        db.session.add(user)
        db.session.commit()
        data = {'username': user.username, 'secret': user.otp_secret.decode()}
        url = pyqrcode.create(json.dumps(data))

    if command == 'LOGIN':
        user = User.query.filter_by(username=request.form['username']).first_or_404()
        data = {'username': user.username, 'command': 'login'}
        url = pyqrcode.create(json.dumps(data))

    stream = BytesIO()
    url.svg(stream, scale=3)
    return stream.getvalue(), 200, {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'}


@app.route('/activate-app', methods=['POST'])
def activate_app():
    print(request.form)
    if 'username' not in request.form:
        abort(404)
    user = User.query.filter_by(username=request.form['username']).first_or_404()
    _logger.debug('User %s', user)
    payload = json.loads(user.decrypt(request.form['args']))
    if 'phoneId' not in payload:
        _logger.error('phoneId not present')
        abort(404)
    user.phone_imei = payload['phoneId']
    db.session.add(user)
    db.session.commit()
    text = jsonify(username=user.encrypt(user.username))
    return text


@app.route('/login', methods=['POST'])
def phone_login():
    if 'username' not in request.form:
        _logger.error('No username in login request')
        abort(404)
    user = User.query.filter_by(username=request.form['username']).first_or_404()
    payload = json.loads(user.decrypt(request.form['args']))
    if 'phoneId' not in payload:
        _logger.error('phoneId not present')
        abort(404)
    if payload['phoneId'] != user.phone_imei:
        _logger.error('%s != %s', payload['phoneId'], user.phone_imei)
        abort(500)
    text = jsonify(username=user.encrypt(user.username))
    return text


@app.route('/')
def index():
    return render_template('index.html')


def pw_gen(size=8, chars=string.ascii_letters + string.digits + string.punctuation):
    return ''.join(random.choice(chars) for _ in range(size))


@app.route('/reset/password_qr')
def qr_reset_password():
    if 'username' not in session:
        abort(404)
    user = User.query.filter_by(username=session['username']).first()
    if user is None:
        abort(404)

    # for added security, remove username from session
    del session['username']

    password = pw_gen()
    url = pyqrcode.create(user.encrypt(password))

    stream = StringIO()
    url.svg(stream, scale=3)
    return stream.getvalue().encode('utf-8'), 200, {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'}


@app.route('/qrcode', methods=['POST'])
def qrcode():
    '''Return a qrcode to use ...
    '''
    if 'username' not in request.form:
        abort(404)
    user = User.query.filter_by(username=request.form['username']).first_or_404()

    if request.form['what'] == 'register':
        # add secret in  ... need to check that request was internal only??
        url = pyqrcode.create({'username': user.username, 'secret': user.otp_secret})
    else:
        url = pyqrcode.create({'username': user.username})

    stream = StringIO()
    url.svg(stream, scale=3)
    return stream.getvalue().encode('utf-8'), 200, {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'}


@app.route('/user-active', methods=['GET'])
def user_active():
    is_active = False
    if 'username' in request.form:
        user = User.query.filter_by(username=request.form['username']).first()
        if user:
            is_active = user.phone_imei is not None
    text = jsonify(status=is_active)
    return text


@app.route('/phone_post', methods=['POST'])
def phone_post():
    '''Get data from phone, get username
    Secret and decrypt
    then do the work!
    '''
    if 'username' not in request.form:
        abort(404)
    user = User.query.filter_by(username=request.form['username']).first_or_404()
    _logger.info('User %s', user)
    payload = json.loads(user.decrypt(request.form['payload']))
    command = payload['command']
    _logger.info('Command %s', command)
    if command == 'unlock':
        text = jsonify(data=user.encrypt(user.username), command=command)
        return text
    elif command == 'password':
        text = jsonify(data=user.encrypt(user.username), command=command,
                       password=user.encrypt(pw_gen()))
        return text
    else:
        abort(404)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


def init_db():
    # create database tables if they don't exist yet
    db.create_all()


if __name__ == '__main__':
    app.config.from_object('config')
    init_db()
    app.run()

