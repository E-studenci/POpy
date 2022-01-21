import enum
import sqlalchemy as db
from sqlalchemy.orm import declarative_base, relationship


TABLE_LICENCES = "license"
TABLE_USERS = "user"
TABLE_ROLES = "role"
TABLE_USER_ROLES = "user_role"
TABLE_MOUNTAIN_RANGES = "mountain_range"
TABLE_WAYPOINTS = "waypoint"
TABLE_PATHS = "path"
TABLE_TRIP_PLANS = "trip_plan"
TABLE_BADGES = "badge"
TABLE_TRIPS = "trip"
TABLE_BADGE_ACQUIREMENTS = "badge_acquirement"
TABLE_BADGE_ACQUIREMENT_REVIEWS = "badge_acquirement_review"
TABLE_PARTICIPATIONS = "participation"
TABLE_GOT_BOOKS = "got_book"
TABLE_PARTICIPATION_REVIEWS = "participation_review"
TABLE_TRIP = "trip"
TABLE_TRIP_SEGMENTS = "trip_segment"


# declarative base class
Base = declarative_base()

class User(Base):
    __tablename__ = TABLE_USERS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    login = db.Column(db.String)
    password = db.Column(db.String)
    name = db.Column(db.String)
    surname = db.Column(db.String)
    roles = relationship(TABLE_USER_ROLES)
    trips = relationship(TABLE_TRIPS)
    badge_acquirement_reviews = relationship(TABLE_BADGE_ACQUIREMENT_REVIEWS)
    got_book = relationship(TABLE_GOT_BOOKS, uselist=False)
    participation_reviews = relationship(TABLE_PARTICIPATION_REVIEWS)
    organized_trips = relationship(TABLE_TRIPS)

class Role(Base):
    __tablename__ = TABLE_ROLES

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String)
    users = relationship(TABLE_USER_ROLES)

class UserRole(Base):
    __tablename__ = TABLE_USER_ROLES

    user = db.Column(db.Integer, db.ForeignKey(TABLE_USERS + ".id"))
    role = db.Column(db.Integer, db.ForeignKey(TABLE_ROLES + ".id"))
    args = db.Column(db.PickleType)

class MountainRange(Base):
    __tablename__ = TABLE_MOUNTAIN_RANGES

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String)
    waypoints = relationship(TABLE_WAYPOINTS)

class Waypoint(Base):
    __tablename__ = TABLE_WAYPOINTS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String)
    elevation = db.Column(db.Integer)
    longtitude = db.Column(db.String)
    latitude = db.Column(db.String)
    description = db.Column(db.String)
    mountain_range = db.Column(db.Integer, db.ForeignKey(TABLE_MOUNTAIN_RANGES + ".id"))
    paths = relationship(TABLE_PATHS)

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

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    color = db.Column(db.Enum(ColorsEnum))
    is_official = db.Column(db.Boolean)
    points = db.Column(db.Integer)
    status = db.Column(db.Enum(PathStatus))
    waypoint_a = db.Column(db.Integer, db.ForeignKey(TABLE_WAYPOINTS + ".id"))
    waypoint_b = db.Column(db.Integer, db.ForeignKey(TABLE_WAYPOINTS + ".id"))
    segments = relationship(TABLE_TRIP_SEGMENTS)

class TripDifficulty(enum.Enum):
    easy = 1
    semi_easy = 2
    medium = 3
    semi_hard = 4
    hard = 5

class TripPlan(Base):
    __tablename__ = TABLE_TRIP_PLANS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    distance = db.Column(db.Float)
    difficulty = db.Column(db.Enum(TripDifficulty))
    is_public = db.Column(db.Boolean)
    segments = relationship(TABLE_TRIP_SEGMENTS)
    creator = db.Column(db.Integer, db.ForeignKey(TABLE_USERS + ".id"))


class TripSegment(Base):
    __tablename__ = TABLE_TRIP_SEGMENTS

    index = db.Column(db.Integer, primary_key=True)
    trip = db.Column(db.Integer, db.ForeignKey(TABLE_TRIPS + ".id"), primary_key=True)
    path = db.Column(db.Integer, db.ForeignKey(TABLE_PATHS + ".id"), primary_key=True)


class Badge(Base):
    __tablename__ = TABLE_BADGES

    required_age = db.Column(db.Integer)
    required_points = db.Column(db.Integer)
    acquirements = relationship(TABLE_BADGE_ACQUIREMENTS)

class BadgeAcquirement(Base):
    __tablename__ = TABLE_BADGE_ACQUIREMENTS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    badge = db.Column(db.Integer, db.ForeignKey(TABLE_BADGES + ".id"))
    got_book = db.Column(db.Integer, db.ForeignKey(TABLE_GOT_BOOKS + ".id"))
    participations = relationship(TABLE_PARTICIPATIONS)

class ReviewEnum(enum.Enum):
    accepted = 1
    rejected = 2    

class BadgeAcquirementReview(Base):
    __tablename__ = TABLE_BADGE_ACQUIREMENT_REVIEWS

    badge_acquirement = db.Column(db.Integer, db.ForeignKey(TABLE_BADGE_ACQUIREMENTS + ".id"), primary_key=True)
    reviewer = db.Column(db.Integer, db.ForeignKey(TABLE_USERS + ".id"), primary_key=True)
    review_date = db.Column(db.DateTime)
    required_points = db.Column(db.Integer)
    earned_points = db.Column(db.Integer)
    review = db.Column(db.Enum(ReviewEnum))

class Participation(Base):
    __tablename__ = TABLE_PARTICIPATIONS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    images = db.Column(db.LargeBinary)
    trip = db.Column(db.Integer, db.ForeignKey(TABLE_TRIPS + ".id"))
    badge_acquirement = db.Column(db.Integer, db.ForeignKey(TABLE_BADGE_ACQUIREMENTS + ".id"))
    participation_reviews = relationship(TABLE_PARTICIPATION_REVIEWS)

class GOTBook(Base):
    __tablename__ = TABLE_GOT_BOOKS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    issue_date = db.Column(db.DateTime)
    badge_acquirements = relationship(TABLE_BADGE_ACQUIREMENTS)
    owner = db.Column(db.Integer, db.ForeignKey(TABLE_USERS + ".id"))

class ParticipationReview(Base):
    __tablename__ = TABLE_PARTICIPATION_REVIEWS

    participation = db.Column(db.Integer, db.ForeignKey(TABLE_PARTICIPATIONS  + ".id"))
    reviewer = db.Column(db.Integer, db.ForeignKey(TABLE_USERS  + ".id"))
    review_date = db.Column(db.DateTime)
    review = db.Column(db.Enum(ReviewEnum))
    earned_points = db.Column(db.Integer)

class Trip(Base):
    __tablename__ = TABLE_TRIP

    date = db.Column(db.DateTime)
    name = db.Column(db.String)
    description = db.Column(db.String)
    is_public = db.Column(db.Boolean)

    participations = relationship(TABLE_PARTICIPATIONS)
    organizer = db.Column(db.Integer, db.ForeignKey(TABLE_USERS + ".id"))

# TODO: String constraints
# TODO: back populating
# TODO: Trip guide