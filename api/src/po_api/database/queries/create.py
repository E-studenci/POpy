from sqlalchemy.orm import Session
from po_api import DATABASE
import po_api.database.orm.models as models
import sqlalchemy as sql
from po_api.database.db import Database


## TODO: create user
@DATABASE.db_query
def create_user(session:Session, user: dict):
    session.begin()
    try:
        inserted_user = session\
            .execute(sql.insert(models.User)\
                .values(
                    login=user["login"],
                    password=user["password"],
                    name=user["name"],
                    surname=user["surname"],
                    ))
        inserted_role = session\
            .execute(sql.insert(models.UserRole)\
                .values(
                    user_id=inserted_user.inserted_primary_key[0],
                    role_id=sql\
                        .select(models.Role.id)\
                            .where(models.Role.name == "Tourist").scalar_subquery(),
                    args=user["args"]
                ))
    except:
        session.rollback()
        raise
    else:
        session.commit()
    return inserted_user
## TODO: create a new badge acquirement review
## TODO: create a new participation review
## TODO: create a new trip plan
## TODO: create a path