import logging
from authapp import app as application, init_db

logging.basicConfig(level=logging.INFO)

init_db()

if __name__ == '__main__':
    application.run()
