import os

SECRET_KEY = 'top-secret'
if os.environ.get('MYSQL_USER') is not None:
#    SQLALCHEMY_DATABASE_URI = 'mysql+mysqldb://%s:%s@%s:%s/%s' % (os.environ['MYSQL_USER'],
#                                                                  os.environ['MYSQL_PASSWORD'],
#                                                                  os.environ['MYSQL_SERVICE_HOST'],
#                                                                  os.environ['MYSQL_SERVICE_PORT'],
#                                                                  os.environ['MYSQL_DATABASE'])
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///db.sqlite')
else:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///db.sqlite')

SQLALCHEMY_TRACK_MODIFICATIONS = False

workers = int(os.environ.get('GUNICORN_PROCESSES', '1'))
threads = int(os.environ.get('GUNICORN_THREADS', '1'))

forwarded_allow_ips = '*'
secure_scheme_headers = {'X-Forwarded-Proto': 'https'}
