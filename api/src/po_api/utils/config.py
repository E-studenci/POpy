from os import getenv
import dotenv

from po_api.utils.singleton import Singleton

dotenv.load_dotenv()


class Environment(metaclass=Singleton):
    def __init__(self) -> None:
        self.db_host = getenv("DB_HOST", "127.0.0.1")
        self.db_port = int(getenv("DB_PORT", "5432"))
        self.db_user = getenv("DB_USER", "root")
        self.db_pass = getenv("DB_PASS", "password")
        self.db_max_connections = int(getenv("SQLALCHEMY_POOL_SIZE", "20"))
        self.flask_secret_key = getenv("SECRET_KEY", "SECRET_KEY")
