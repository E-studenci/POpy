from sqlalchemy.orm import Session, selectinload, joinedload
from po_api import DATABASE
import po_api.database.orm.models as models
import sqlalchemy as sql
from po_api.database.db import Database


## TODO: get all waypoints
@DATABASE.db_query
def get_all_waypoints(session: Session):
    return session\
        .execute(\
            sql.select(models.Waypoint)\
            .options(selectinload(models.Waypoint.mountain_range))\
        ).scalars().all()

## TODO: get all paths
@DATABASE.db_query
def get_all_paths(session: Session):
    return session\
        .execute(\
            sql.select(models.Path)\
            .options(\
                joinedload(models.Path.waypoint_a)\
                    .options(selectinload(models.Waypoint.mountain_range)),\
                joinedload(models.Path.waypoint_b)\
                    .options(selectinload(models.Waypoint.mountain_range)))
        ).scalars().all()
## TODO: get trips guided by user
## TODO: get participations for trip
## TODO: get all badge acquirements waiting for review
## TODO: get user by login
## TODO: get user by email