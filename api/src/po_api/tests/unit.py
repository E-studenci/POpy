import json
import unittest

import po_api.utils.json_validation.json_methods as json_methods
import po_api.database.queries.read as read
import po_api.database.queries.create as create
from po_api.database.orm.models import new_alchemy_encoder
from flask import jsonify, Flask
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
        result = read.get_all_paths()
        with Flask(__name__).app_context():
            try:
                s = jsonify(results = result)
                print(s.response[0])
                print(json.dumps(result, cls=new_alchemy_encoder(), check_circular=False))
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