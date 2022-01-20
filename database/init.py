import enum
from sqlalchemy import *
from sqlalchemy.orm import declarative_base


TABLE_LICENCES = "license"
TABLE_USERS = "user"
TABLE_ROLES = "role"
TABLE_MOUNTAIN_RANGES = "mountain_range"
TABLE_WAYPOINTS = "waypoint"
TABLE_PATHS = "path"
TABLE_PATH_HISTORY = "path_history"
TABLE_TRIP_PLANS = "trip_plan"
TABLE_BADGES = "badge"
TABLE_TRIPS = "trip"
TABLE_BADGE_ACQUIREMENT = "acquirement"
TABLE_PARTICIPATION = "participation"
TABLE_GOT_BOOK = "got_book"

# declarative base class
Base = declarative_base()

class User(Base):
    __tablename__ = TABLE_USERS

    id = Column(Integer, primary_key=True, autoincrement=True)
    login = Column(String)
    password = Column(String)
    name = Column(String)
    surname = Column(String) # birthdate to role_user args

class Licence(Base):
    __tablename__ = TABLE_LICENCES

    number = Column(Integer, primary_key=True)
    acquirement_date = Column(DateTime, primary_key=True)

class Role(Base):
    __tablename__ = TABLE_ROLES

    name = Column(String)

class MountainRange(Base):
    __tablename__ = TABLE_MOUNTAIN_RANGES

    name = Column(String)

class Waypoint(Base):
    __tablename__ = TABLE_WAYPOINTS

    name = Column(String)
    elevation = Column(Integer)
    longtitude = Column(String)
    latitude = Column(String)
    description = Column(String)


class ColorsEnum(enum.Enum):
    red = 1
    green = 2
    blue = 3
    black = 4
    yellow = 5

class PathStatus(enum.Enum):
    open = 1
    closed = 2

class Path(Base):
    __tablename__ = TABLE_PATHS

    color = Column(Enum(ColorsEnum))
    is_official = Column(Boolean)
    points = Column(Integer)
    status = Column(Enum(PathStatus))

class PathHistory(Base):
    __tablename__ = TABLE_PATH_HISTORY

    date_start = Column(DateTime)
    date_end = Column(DateTime)
    points = Column(Integer)
    status = Column(Enum(PathStatus))

class TripDifficulty(enum.Enum):
    easy = 1
    semi_easy = 2
    medium = 3
    semi_hard = 4
    hard = 5


class TripPlan(Base):
    __tablename__ = TABLE_TRIP_PLANS

    name = Column(String)
    description = Column(String)
    distance = Column(Float)
    difficulty = Column(Enum(TripDifficulty))
    is_public = Column(Boolean)

class Badge(Base):
    __tablename__ = TABLE_BADGES

    required_age = Column(Integer)
    required_points = Column(Integer)

class BadgeAcquirement(Base):
    __tablename__ = TABLE_BADGE_ACQUIREMENT

    acquirement_date = Column(DateTime)
    current_points = Column(Integer)
    required_points = Column(Integer)
    status = pass # TODO