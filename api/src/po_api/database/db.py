from sqlalchemy.exc import SQLAlchemyError
from functools import wraps
import typing as t
import sqlalchemy

from po_api.utils.errors import DBConnectionError
import logging


class Database:
    def __init__(self, db_url: str) -> None:
        self.engine = sqlalchemy.create_engine(db_url)
    
    def db_query(self, func) -> t.Callable:
        @wraps(func)
        def wrapper(*args, **kwargs) -> t.Any:
            try:
                with self.engine.connect() as connection:
                    result = func(connection, *args , **kwargs)
                    return result
            except SQLAlchemyError as db_error:
                logging.error(db_error)
                raise DBConnectionError()
        return wrapper

