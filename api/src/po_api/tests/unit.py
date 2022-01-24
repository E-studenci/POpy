import datetime
from po_api.database.orm.models import new_alchemy_encoder
import po_api.utils.json_validation.json_methods as json_methods
import po_api.database.queries.create as create
import po_api.database.queries.update as update
import po_api.database.queries.read as read
import po_api.database.orm.models as models
from flask import jsonify, Flask
import unittest
import json

SCHEMA =  {
    "type" : "object",
    "properties" : {
        "price" : {"type" : "number"},
        "name" : {"type" : "string"},
    },
    "required": ["price", "name"]
}
GOOD_DATA = {"price": 5, "name": "Adam"}
BAD_DATA = {"price": 5}

# # class TestJsonParser(unittest.TestCase):
#     def test_none_json_data(self):
#         valid, error = json_methods.validate_json(SCHEMA, None)
#         self.assertFalse(valid)
#         self.assertEquals(error, "No json data provided.")
    
#     def test_none_schema(self):
#         valid, error = json_methods.validate_json(None, GOOD_DATA)
#         self.assertFalse(valid)
#         self.assertEquals(error, "No json schema provided.")
    
#     def test_bad_data(self):
#         valid, error = json_methods.validate_json(SCHEMA, BAD_DATA)
#         self.assertFalse(valid)
#         self.assertEquals(error, "'name' is a required property")
    
#     def test_good_data(self):
#         valid, error = json_methods.validate_json(SCHEMA, GOOD_DATA)
#         self.assertTrue(valid)
#         self.assertIsNone(error)
class TestGetAllWaypoints(unittest.TestCase):
    def test_good_data(self):
        result = read.get_all_waypoints()
        with Flask(__name__).app_context():
            try:
                for x in result:
                    s = jsonify(results = result)
                    print(s.response[0])
                    print(json.dumps(x, cls=new_alchemy_encoder(), check_circular=False))
            except Exception as e:
                print()

class TestGetAllPaths(unittest.TestCase):
    def test_good_data(self):
        result1 = read.get_all_paths(False)
        result2 = read.get_all_paths(True)
        with Flask(__name__).app_context():
            try:
                s = jsonify(results = result1)
                print(s.response[0])
                print(json.dumps(result1, cls=new_alchemy_encoder(), check_circular=False))
            except Exception as e:
                print()

# class TestAddUser(unittest.TestCase):
#     def test_good_data(self):
        # result = create.create_user({
        #             "login": "esss",
        #             "password": "ess",
        #             "name": "Jack",
        #             "surname": "Sparrow",
        #             "args": {"handicapped": True}})

class TestGetTrip(unittest.TestCase):
    def test_good_data(self):
        result = read.get_trip(1)
        print()

class TestGetMountainRanges(unittest.TestCase):
    def test_good_data(self):
        result = read.get_all_mountain_ranges()
        print()

class TestAuthUser(unittest.TestCase):
    def test_good_data(self):
        result = read.auth_user("es", "ess")
        print()

class TestEditPath(unittest.TestCase):
    def test_good_data(self):
        result = update.update_path(4, {
            "color": models.ColorsEnum.blue,
            "is_official": True,
            "waypoint_a_id": 4
            })
        print()

class TestGetPendingBadgeAcquirements(unittest.TestCase):
    def test_good_data(self):
        result = read.get_pending_badge_acquirements()
        print()

class TestReviewParticipation(unittest.TestCase):
    def test_good_data(self):
        result = create.review_participation({
            "review":models.ReviewEnum.accepted,
            "participation_id":2,
            "reviewer_id":3,
            "review_date":datetime.datetime.now(),
            "earned_points":12})
        print()

class TestReviewBadgeAcquirement(unittest.TestCase):
    def test_good_data(self):
        result = create.review_badge_acquirement({
            "review":models.ReviewEnum.accepted,
            "badge_acquirement_id":2,
            "reviewer_id":3,
            "review_date":datetime.datetime.now(),
            "required_points":12,
            "earned_points":12})
        print()

class TestCreateTripPlan(unittest.TestCase):
    def test_good_data(self):
        result = create.create_trip_plan({
            "name":"trip_plan_1",
            "description":"noice!",
            "distance":12,
            "difficulty":models.TripDifficulty.medium,
            "is_public":True,
            "creator_id":3,
            "path_ids": [1,2,3,10,11]})
        print()

class TestCreatePath(unittest.TestCase):
    def test_good_data(self):
        result = create.create_path({
            "color":models.ColorsEnum.black,
            "is_official":True,
            "points":3,
            "status":models.PathStatus.open,
            "waypoint_a_id":1,
            "waypoint_b_id":7,
            "distance":123})
        print()