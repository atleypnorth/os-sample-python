import logging
from authapp import app as application, db

logging.basicConfig(level=logging.INFO)
application.config.from_object('config')
db.create_all()

if __name__ == '__main__':
    application.run()
