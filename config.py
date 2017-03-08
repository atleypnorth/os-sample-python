import os

SECRET_KEY = 'top-secret'
db_path = os.environ.get('DB_PATH','db.sqlite')
SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///%s' % db_path)
SQLALCHEMY_TRACK_MODIFICATIONS = False

workers = int(os.environ.get('GUNICORN_PROCESSES', '3'))
threads = int(os.environ.get('GUNICORN_THREADS', '1'))

forwarded_allow_ips = '*'
secure_scheme_headers = { 'X-Forwarded-Proto': 'https' }
