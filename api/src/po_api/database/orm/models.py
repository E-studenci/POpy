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
TABLE_TRIP_SEGMENTS = "trip_segment"

def tablename_to_class_name(string:str):
    return string.replace('_', ' ').title().replace(' ', '')

# declarative base class
Base = declarative_base()
class ColorsEnum(enum.Enum):
    red = 1
    green = 2
    blue = 3
    black = 4
    yellow = 5
class PathStatus(enum.Enum):
    open = 1
    closed = 2
class TripDifficulty(enum.Enum):
    easy = 1
    semi_easy = 2
    medium = 3
    semi_hard = 4
    hard = 5
class ReviewEnum(enum.Enum):
    accepted = 1
    rejected = 2    
class BadgeAcquirementStatusEnum(enum.Enum):
    collecting_points = 1
    waiting_for_review = 2
    acquired = 3
    rejected = 4
class ParticipationStatusEnum(enum.Enum):
    waiting_for_review = 1
    acquired = 2
    rejected = 3

trip_guides = db.Table('association', Base.metadata,
    db.Column('guide', db.ForeignKey(TABLE_USERS + '.id'), primary_key=True),
    db.Column('trip', db.ForeignKey(TABLE_TRIPS + '.id'), primary_key=True)
)
class User(Base):
    __tablename__ = TABLE_USERS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    login = db.Column(db.String(30))
    password = db.Column(db.String(255))
    name = db.Column(db.String(30))
    surname = db.Column(db.String(30))
    
    roles = relationship(tablename_to_class_name(TABLE_USER_ROLES), back_populates="user")
    badge_acquirement_reviews = relationship(tablename_to_class_name(TABLE_BADGE_ACQUIREMENT_REVIEWS), back_populates="reviewer")
    got_book = relationship(tablename_to_class_name(TABLE_GOT_BOOKS), uselist=False, back_populates="owner")
    participation_reviews = relationship(tablename_to_class_name(TABLE_PARTICIPATION_REVIEWS), back_populates="reviewer")
    organized_trips = relationship(tablename_to_class_name(TABLE_TRIPS), back_populates="organizer")
    guided_trips = relationship(tablename_to_class_name(TABLE_TRIPS), secondary=trip_guides, back_populates="guides")
    trip_plans = relationship(tablename_to_class_name(TABLE_TRIP_PLANS), back_populates="creator")  

class Role(Base):
    __tablename__ = TABLE_ROLES

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(30))
    users = relationship(tablename_to_class_name(TABLE_USER_ROLES), back_populates="roles")

class UserRole(Base):
    __tablename__ = TABLE_USER_ROLES

    user_id = db.Column(db.Integer, db.ForeignKey(TABLE_USERS + ".id"), primary_key=True)
    user = relationship(tablename_to_class_name(TABLE_USERS), back_populates="roles")

    role_id = db.Column(db.Integer, db.ForeignKey(TABLE_ROLES + ".id"), primary_key=True)
    roles = relationship(tablename_to_class_name(TABLE_ROLES), back_populates="users")

    args = db.Column(db.PickleType)

class MountainRange(Base):
    __tablename__ = TABLE_MOUNTAIN_RANGES

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(30))
    waypoints = relationship(tablename_to_class_name(TABLE_WAYPOINTS), back_populates="mountain_range")

class Waypoint(Base):
    __tablename__ = TABLE_WAYPOINTS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(30))
    elevation = db.Column(db.Integer)
    longtitude = db.Column(db.String)
    latitude = db.Column(db.String)
    description = db.Column(db.String(255))

    mountain_range_id = db.Column(db.Integer, db.ForeignKey(TABLE_MOUNTAIN_RANGES + ".id"))
    mountain_range = relationship(tablename_to_class_name(TABLE_MOUNTAIN_RANGES), back_populates="waypoints")

    path_starts = relationship(tablename_to_class_name(TABLE_PATHS), back_populates="waypoint_a", foreign_keys='Path.waypoint_a_id')
    path_ends = relationship(tablename_to_class_name(TABLE_PATHS), back_populates="waypoint_b", foreign_keys='Path.waypoint_b_id')

class Path(Base):
    __tablename__ = TABLE_PATHS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    color = db.Column(db.Enum(ColorsEnum))
    is_official = db.Column(db.Boolean)
    points = db.Column(db.Integer)
    status = db.Column(db.Enum(PathStatus))

    waypoint_a_id = db.Column(db.Integer, db.ForeignKey(TABLE_WAYPOINTS + ".id"))
    waypoint_a = relationship(tablename_to_class_name(TABLE_WAYPOINTS), back_populates="path_starts", foreign_keys='Path.waypoint_a_id')
    waypoint_b_id = db.Column(db.Integer, db.ForeignKey(TABLE_WAYPOINTS + ".id"))
    waypoint_b = relationship(tablename_to_class_name(TABLE_WAYPOINTS), back_populates="path_ends", foreign_keys='Path.waypoint_b_id')

    segments = relationship(tablename_to_class_name(TABLE_TRIP_SEGMENTS), back_populates="path")

class TripPlan(Base):
    __tablename__ = TABLE_TRIP_PLANS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(30))
    description = db.Column(db.String(255))
    distance = db.Column(db.Float)
    difficulty = db.Column(db.Enum(TripDifficulty))
    is_public = db.Column(db.Boolean)
    
    creator_id = db.Column(db.Integer, db.ForeignKey(TABLE_USERS + ".id"))
    creator = relationship(tablename_to_class_name(TABLE_USERS), back_populates="trip_plans")
    
    segments = relationship(tablename_to_class_name(TABLE_TRIP_SEGMENTS), back_populates="trip_plan")
    trips = relationship(tablename_to_class_name(TABLE_TRIPS), back_populates="trip_plan")

class TripSegment(Base):
    __tablename__ = TABLE_TRIP_SEGMENTS

    index = db.Column(db.Integer, primary_key=True)

    trip_plan_id = db.Column(db.Integer, db.ForeignKey(TABLE_TRIP_PLANS + ".id"), primary_key=True)
    trip_plan = relationship(tablename_to_class_name(TABLE_TRIP_PLANS), back_populates="segments")

    path_id = db.Column(db.Integer, db.ForeignKey(TABLE_PATHS + ".id"), primary_key=True)
    path = relationship(tablename_to_class_name(TABLE_PATHS), back_populates="segments")

class Badge(Base):
    __tablename__ = TABLE_BADGES
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    required_age = db.Column(db.Integer)
    required_points = db.Column(db.Integer)
    acquirements = relationship(tablename_to_class_name(TABLE_BADGE_ACQUIREMENTS), back_populates="badge")

class BadgeAcquirement(Base):
    __tablename__ = TABLE_BADGE_ACQUIREMENTS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    status = db.Column(db.Enum(BadgeAcquirementStatusEnum))

    badge_id = db.Column(db.Integer, db.ForeignKey(TABLE_BADGES + ".id"))
    badge = relationship(tablename_to_class_name(TABLE_BADGES), back_populates="acquirements")

    got_book_id = db.Column(db.Integer, db.ForeignKey(TABLE_GOT_BOOKS + ".id"))
    got_book = relationship(tablename_to_class_name(TABLE_GOT_BOOKS), back_populates="badge_acquirements")

    participations = relationship(tablename_to_class_name(TABLE_PARTICIPATIONS), back_populates="badge_acquirement")

    reviews = relationship(tablename_to_class_name(TABLE_BADGE_ACQUIREMENT_REVIEWS), back_populates="badge_acquirement") 

class BadgeAcquirementReview(Base):
    __tablename__ = TABLE_BADGE_ACQUIREMENT_REVIEWS

    badge_acquirement_id = db.Column(db.Integer, db.ForeignKey(TABLE_BADGE_ACQUIREMENTS + ".id"), primary_key=True)
    badge_acquirement = relationship(tablename_to_class_name(TABLE_BADGE_ACQUIREMENTS), back_populates="reviews")

    reviewer_id = db.Column(db.Integer, db.ForeignKey(TABLE_USERS + ".id"), primary_key=True)
    reviewer = relationship(tablename_to_class_name(TABLE_USERS), back_populates="badge_acquirement_reviews")
    
    review_date = db.Column(db.DateTime)
    required_points = db.Column(db.Integer)
    earned_points = db.Column(db.Integer)
    review = db.Column(db.Enum(ReviewEnum))

class Participation(Base):
    __tablename__ = TABLE_PARTICIPATIONS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    images = db.Column(db.LargeBinary)
    status = db.Column(db.Enum(ParticipationStatusEnum))

    trip_id = db.Column(db.Integer, db.ForeignKey(TABLE_TRIPS + ".id"))
    trip = relationship(tablename_to_class_name(TABLE_TRIPS), back_populates="participations")

    badge_acquirement_id = db.Column(db.Integer, db.ForeignKey(TABLE_BADGE_ACQUIREMENTS + ".id"))
    badge_acquirement = relationship(tablename_to_class_name(TABLE_BADGE_ACQUIREMENTS), back_populates="participations")

    participation_reviews = relationship(tablename_to_class_name(TABLE_PARTICIPATION_REVIEWS), back_populates="participation")

class GotBook(Base):
    __tablename__ = TABLE_GOT_BOOKS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    issue_date = db.Column(db.DateTime)

    badge_acquirements = relationship(tablename_to_class_name(TABLE_BADGE_ACQUIREMENTS), back_populates="got_book")

    owner_id = db.Column(db.Integer, db.ForeignKey(TABLE_USERS + ".id"))
    owner = relationship(tablename_to_class_name(TABLE_USERS), back_populates="got_book")

class ParticipationReview(Base):
    __tablename__ = TABLE_PARTICIPATION_REVIEWS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    review = db.Column(db.Enum(ReviewEnum))

    participation_id = db.Column(db.Integer, db.ForeignKey(TABLE_PARTICIPATIONS  + ".id"))
    participation = relationship(tablename_to_class_name(TABLE_PARTICIPATIONS), back_populates="participation_reviews")

    reviewer_id = db.Column(db.Integer, db.ForeignKey(TABLE_USERS  + ".id"))
    reviewer = relationship(tablename_to_class_name(TABLE_USERS), back_populates="participation_reviews")

    review_date = db.Column(db.DateTime)
    earned_points = db.Column(db.Integer)

class Trip(Base):
    __tablename__ = TABLE_TRIPS

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    date = db.Column(db.DateTime)
    name = db.Column(db.String(30))
    description = db.Column(db.String(255))
    is_public = db.Column(db.Boolean)

    participations = relationship(tablename_to_class_name(TABLE_PARTICIPATIONS), back_populates="trip")

    organizer_id = db.Column(db.Integer, db.ForeignKey(TABLE_USERS + ".id"))
    organizer = relationship(tablename_to_class_name(TABLE_USERS), back_populates="organized_trips")

    guides = relationship(tablename_to_class_name(TABLE_USERS), secondary=trip_guides, back_populates="guided_trips")

    trip_plan_id = db.Column(db.Integer, db.ForeignKey(TABLE_TRIP_PLANS  + ".id"))
    trip_plan = relationship(tablename_to_class_name(TABLE_TRIP_PLANS), back_populates="trips")

if __name__ == "__main__":
    url = f'postgresql+psycopg2://postgres:AB9B75D8E128E8040A0E0D751D37393CA8D4C663@130.61.111.97:30001'
    engine = db.create_engine(url, echo=True)
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)
