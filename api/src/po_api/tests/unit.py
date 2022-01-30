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
                    # print(s.response[0])
                    # print(json.dumps(x, cls=new_alchemy_encoder(), check_circular=False))
            except Exception as e:
                print()

class TestGetAllMountainRanges(unittest.TestCase):
    def test_good_data(self):
        result = read.get_all_mountain_ranges()
        with Flask(__name__).app_context():
            try:
                for x in result:
                    s = jsonify(results = result)
                    # print(s.response[0])
                    # print(json.dumps(x, cls=new_alchemy_encoder(), check_circular=False))
            except Exception as e:
                print()


class TestGetAllPaths(unittest.TestCase):
    def test_good_data(self):
        # result1 = read.get_all_paths(False)
        # result2 = read.get_all_paths(True)
        result3 = read.get_all_paths(False,1)
        with Flask(__name__).app_context():
            try:
                s = jsonify(results = result3)
                print(s.response[0])
                # print(json.dumps(result1, cls=new_alchemy_encoder(), check_circular=False))
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
        with Flask(__name__).app_context():
            try:
                s = jsonify(results = result)
                # print(s.response[0])
            except Exception as e:
                print()

class TestGetMountainRanges(unittest.TestCase):
    def test_good_data(self):
        result = read.get_all_mountain_ranges()
        with Flask(__name__).app_context():
            try:
                s = jsonify(results = result)
                # print(s.response[0])
            except Exception as e:
                print()

class TestAuthUser(unittest.TestCase):
    def test_good_data(self):
        result = read.auth_user("es", "ess")
        print()

class TestEditPath(unittest.TestCase):
    def test_good_data(self):
        result = update.update_path(4, {
            "color": models.ColorsEnum.red,
            "is_official": True,
            "waypoint_a_id": 4,
            "status": "open"
            })
        print()

class TestGetPendingBadgeAcquirements(unittest.TestCase):
    def test_good_data(self):
        result = read.get_pending_badge_acquirements()
        with Flask(__name__).app_context():
            try:
                s = jsonify(results = result)
                # print(s.response[0])
            except Exception as e:
                print()

# class TestReviewParticipation(unittest.TestCase):
    # def test_good_data(self):
    #     result = create.review_participation({
    #         "review":models.ReviewEnum.accepted,
    #         "participation_id":2,
    #         "reviewer_id":3,
    #         "review_date":datetime.datetime.now(),
    #         "earned_points":12})
    #     print()
        

# class TestReviewBadgeAcquirement(unittest.TestCase):
#     def test_good_data(self):
#         result = create.review_badge_acquirement({
#             "review":models.ReviewEnum.accepted,
#             "badge_acquirement_id":2,
#             "reviewer_id":3,
#             "review_date":datetime.datetime.now(),
#             "required_points":12,
#             "earned_points":12})
#         print()

# class TestCreateTripPlan(unittest.TestCase):
#     def test_good_data(self):
#         result = create.create_trip_plan({
#             "name":"trip_plan_1",
#             "description":"noice!",
#             "distance":12,
#             "difficulty":models.TripDifficulty.medium,
#             "is_public":True,
#             "creator_id":3,
#             "path_ids": [1,2,3,10,11]})
#         print()

# class TestCreatePath(unittest.TestCase):
#     def test_good_data(self):
        # result = create.create_path({
        #     "color":models.ColorsEnum.black,
        #     "is_official":True,
        #     "points":3,
        #     "status":models.PathStatus.open,
        #     "waypoint_a_id":1,
        #     "waypoint_b_id":7,
        #     "distance":123})
        # print()

class TestGetWaypointByName(unittest.TestCase):
    def test_good_data(self):
        result = read.get_waypoint_by_name("pkt_1")
        result2 = read.get_waypoint_by_name("asda")
        with Flask(__name__).app_context():
            try:
                s = jsonify(results = result)
                # print(s.response[0])
            except Exception as e:
                print()

# class TestCreatePath(unittest.TestCase):
#     def test_good_data(self):
#         result = create.create_path({
#             "color":models.ColorsEnum.black,
#             "is_official":True,
#             "points":3,
#             "status":models.PathStatus.open,
#             "waypoint_a_id":1,
#             "waypoint_b_id":9999,
#             "distance":123})
#         print()

# class TestCreateUserRole(unittest.TestCase):
#     def test_good_data(self):
#         result = create.assign_role(1,1,{"is_handicapped": False, "birth_date": datetime.datetime.now()})
#         result = create.assign_role(2,1,{"is_handicapped": False, "birth_date": datetime.datetime.now()})
#         result = create.assign_role(3,2,{"licence_nr": 123434343123434})
#         result = create.assign_role(4,4,{"licence_nr": 211234433434434})
#         result = create.assign_role(5,1,{"is_handicapped": True, "birth_date": datetime.datetime.now()})
#         result = create.assign_role(6,1,{"is_handicapped": True, "birth_date": datetime.datetime.now()})
#         result = create.assign_role(7,2,{"licence_nr": 123443124341234})
#         result = create.assign_role(8,1,{"is_handicapped": False, "birth_date": datetime.datetime.now()})
#         result = create.assign_role(9,4,{"licence_nr": 321412346489943})
#         result = create.assign_role(10,1,{"is_handicapped": False, "birth_date": datetime.datetime.now()})
#         print()