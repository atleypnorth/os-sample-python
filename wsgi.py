from authapp import app as application
from authapp import init_db

application.config.from_object('config')
init_db()

if __name__ == '__main__':
    application.run()
