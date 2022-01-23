from sqlalchemy.orm import Session, selectinload, joinedload, noload
from po_api import DATABASE
import po_api.database.orm.models as models
import sqlalchemy as sql
from po_api.database.db import Database


## TODO: get all waypoints
@DATABASE.db_query
def get_all_waypoints(session: Session):
    return session\
        .execute(
            sql.select(models.Waypoint)\
            .options(
                joinedload(models.Waypoint.mountain_range)\
                    .options(noload(models.MountainRange.waypoints)),
                joinedload(models.Waypoint.path_starts)
                # noload(models.Waypoint.path_starts)
                )
        ).unique().scalars().all()

## TODO: get all paths
@DATABASE.db_query
def get_all_paths(session: Session):
    x = session\
        .execute(
            sql.select(models.Path)\
            .options(
                joinedload(models.Path.waypoint_a)\
                    .options(
                        joinedload(models.Waypoint.mountain_range),
                    ),
                joinedload(models.Path.waypoint_b)\
                    .options(
                        joinedload(models.Waypoint.mountain_range),
                    ))
        ).scalars().all()
    return x
## TODO: get trips guided by user
# @DATABASE.db_query
# def get_trips_guided_by_user(session: Session, user_id: int):
#     return session\
#         .execute(
#             sql.select(models.Trip).where(
#                 models.Trip.guides.any(models.User.id == user_id))
#         ).scalars().all
## TODO: get trip
@DATABASE.db_query
def get_trip(session:Session, trip_id: int):
    result = session.execute(
        sql.select(models.Trip).where(models.Trip.id == trip_id).options(
            joinedload(models.Trip.participations)
            .options(
                joinedload(models.Participation.badge_acquirement).options(
                    joinedload(models.BadgeAcquirement.got_book).options(
                        joinedload(models.GotBook.owner)
                    )
                )
            )
        )
    ) 
    result = result.unique().scalars().all()
    return result
## TODO: get all badge acquirements waiting for review
@DATABASE.db_query
def get_pending_badge_acquirements(session: Session):
    result = session.execute(sql.select(models.BadgeAcquirement)\
        .where(models.BadgeAcquirement.status == models.BadgeAcquirementStatusEnum.waiting_for_review))
    return result.unique().scalars().all()
## TODO: authorize user
@DATABASE.db_query
def auth_user(session: Session, login: str, password:str):
    result = session.execute(sql.select(models.User)\
        .where(models.User.login == login and models.User.password == password))
    return result.unique().scalars().all()
## TODO: get all mountain ranges
@DATABASE.db_query
def get_all_mountain_ranges(session: Session):
    result = session\
        .execute(
            sql.select(models.MountainRange).options(joinedload(models.MountainRange.waypoints))
        ).unique().scalars().all()
    return result