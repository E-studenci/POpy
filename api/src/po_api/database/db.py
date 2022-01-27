from sqlalchemy.exc import SQLAlchemyError, IntegrityError
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
    
    def db_query(self, fix_tuple=False):
        def called(func):
            @wraps(func)
            def wrapper(*args, **kwargs) -> t.Any:
                try:
                    with self.engine.connect() as connection:
                        with Session(bind=connection) as session:
                            result = func(session, *args , **kwargs)
                        if fix_tuple and result:
                            return result[0]
                        return result
                except IntegrityError as int_error:
                    return int_error.orig.pgerror
                except SQLAlchemyError as db_error:
                    logging.error(db_error)
                    raise DBConnectionError()
                except Exception as error:
                    logging.error(error)
                    raise
            return wrapper
        return called
