from flask_httpauth import HTTPBasicAuth
from flask_login import LoginManager
from flask_cors import CORS
from po_api.utils.config import Environment
from po_api.database.db import Database
from po_api.app.app import App
import logging

ENV = Environment()

APP = App(
    "PO",
    ENV
)
APP.config["SECRET_KEY"] = ENV.flask_secret_key
DATABASE = Database(ENV)
CORS(APP, supports_credentials = True)

LOGIN_MANAGER = LoginManager()
LOGIN_MANAGER.init_app(APP)
BASIC_AUTH = HTTPBasicAuth()

import po_api.initialize_modules

def run_app(host: str = '127.0.0.1', port: int = 5000):
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.ERROR)
    APP.run(host=host, port=port, use_reloader=False, debug=True)
