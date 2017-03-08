from io import StringIO, BytesIO
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
            self.otp_secret = Fernet.generate_key()
        self.fer = Fernet(self.otp_secret)
        self.phone_imei = kwargs.get('phone_imei')

    @orm.reconstructor
    def init_on_load(self):
        self.fer = Fernet(self.otp_secret)

    def encrypt(self, data):
        return self.fer.encrypt(data.encode()).decode()

    def decrypt(self, data):
        return self.decrypt_bytes(data.encode())

    def decrypt_bytes(self, data):
        return self.fer.decrypt(data).decode()

    def get_totp_uri(self):
        return 'otpauth://totp/2FA-Demo:{0}?secret={1}&issuer=2FA-Demo' \
            .format(self.username, self.otp_secret)


@app.route('/register', methods=['POST'])
def register_app():
    if 'username' not in request.form:
        _logger.error('Username not in request')
        abort(404)
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
    stream = BytesIO()
    url.svg(stream, scale=3)
    return stream.getvalue(), 200, {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'}


@app.route('/activate_app', methods=['POST'])
def activate_app():
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

