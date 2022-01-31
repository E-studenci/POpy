import po_api.utils.json_validation.json_methods as json_methods
import unittest

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


class TestJsonParser(unittest.TestCase):
    def test_none_json_data(self):
        valid, error = json_methods.validate_json(SCHEMA, None)
        self.assertFalse(valid)
        self.assertEquals(error, "No json data provided.")
    
    def test_none_schema(self):
        valid, error = json_methods.validate_json(None, GOOD_DATA)
        self.assertFalse(valid)
        self.assertEquals(error, "No json schema provided.")
    
    def test_bad_data(self):
        valid, error = json_methods.validate_json(SCHEMA, BAD_DATA)
        self.assertFalse(valid)
        self.assertEquals(error, "'name' is a required property")
    
    def test_good_data(self):
        valid, error = json_methods.validate_json(SCHEMA, GOOD_DATA)
        self.assertTrue(valid)
        self.assertIsNone(error)
