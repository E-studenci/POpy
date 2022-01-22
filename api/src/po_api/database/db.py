from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from functools import wraps
import typing as t
import sqlalchemy
import logging

from po_api.utils.errors import DBConnectionError
from po_api.utils.config import Environment

class Database:
    def __init__(self, env: Environment) -> None:
        url = f'{env.db_protocol}://{env.db_user}:{env.db_pass}@{env.db_host}:{env.db_port}'
        self.engine = sqlalchemy.create_engine(url)
    
    def db_query(self, func) -> t.Callable:
        @wraps(func)
        def wrapper(*args, **kwargs) -> t.Any:
            try:
                with self.engine.connect() as connection:
                    with Session(bind=connection) as session:
                        result = func(session, *args , **kwargs)
                    return result
            except SQLAlchemyError as db_error:
                logging.error(db_error)
                raise DBConnectionError()
            except Exception as error:
                logging.error(error)
        return wrapper

