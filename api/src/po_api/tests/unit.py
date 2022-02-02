import po_api.utils.json_validation.json_methods as json_methods
import po_api.utils.json_validation.json_schemas as json_schemas
import jsonschema
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


class TestJsonSchemas(unittest.TestCase):
    @classmethod
    def create_all_tests(cls):
        all_schemas = [
            (item, json_schemas.__dict__[item]) 
            for item in json_schemas.__dict__ if 'SCHEMA' in item
        ]
        for key, schema in all_schemas:
            def test_method(self):
                valid = True
                try:
                    jsonschema.validate({}, schema)
                except jsonschema.SchemaError:
                    valid = False
                except:
                    pass
                self.assertTrue(valid)
            setattr(cls, f'test_{key.lower()}', test_method)

TestJsonSchemas.create_all_tests()
