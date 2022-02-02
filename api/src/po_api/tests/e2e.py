import requests.auth as rauth
import requests
import unittest

HOST = "localhost"
PORT = 5000

GOOD_LOGIN = 'michal'
BAD_LOGIN = 'notexistingaccount'
PASSWORD = '123'

RESPONSE_401 = {
    "data": {},
    "error": {
        "description": "The server could not verify that you are authorized to access the URL requested. You either supplied the wrong credentials (e.g. a bad password), or your browser doesn't understand how to supply the credentials required.",
        "name": "Unauthorized"
    },
    "status": "client-error"
}

NO_DATA_RESPONSE = {
    'data':{},
    'error':{
        'description':'Provide application/json or application/*+json content type.',
        'name':'Mimetype error'
    },
    'status':'client-error'
}

class TestLoginRoutes(unittest.TestCase):
    def test_failed_login(self):
        response = requests.get(
            f"http://{HOST}:{PORT}/login", 
            auth=rauth.HTTPBasicAuth(BAD_LOGIN, PASSWORD)
        )
        json_data = response.json()
        self.assertEquals(response.status_code, 401)
        self.assertEquals(json_data, RESPONSE_401)


BAD_PATH_DATA = {
    "color": "brown",
    "is_official": True,
    "points": 10,
    "waypoint_a_id": 1, 
    "waypoint_b_id": 1,
    "distance": 2000,
    "status": "open"
}

BAD_PATH_RESPONSE = {
    'data':{},
    'error':{
        'description':"'brown' is not one of ['red', 'green', 'blue', 'black', 'yellow']",
        'name':'Invalid JSON schema'
    },
    'status':'client-error'
}

class TestPathRoutes(unittest.TestCase):
    def setUp(self) -> None:
        response = requests.get(
            f"http://{HOST}:{PORT}/login", 
            auth=rauth.HTTPBasicAuth(GOOD_LOGIN, PASSWORD)
        )
        self.cookies = response.cookies
    
    def test_no_data(self):
        response = requests.post(
            f"http://{HOST}:{PORT}/path", 
            cookies=self.cookies
        )
        json_data = response.json()
        self.assertEquals(json_data, NO_DATA_RESPONSE)
        self.assertEquals(response.status_code, 400)
        
    def test_bad_data(self):
        response = requests.post(
            f"http://{HOST}:{PORT}/path",
            cookies=self.cookies,
            json=BAD_PATH_DATA
        )
        json_data = response.json()
        self.assertEquals(json_data, BAD_PATH_RESPONSE)
        self.assertEquals(response.status_code, 400)

BAD_WAYPOINT_DATA = {
    "name": "Point",
    "elevation": 1000,
    "longtitude": "12 stopni",
    "latitude": "13 stopni", 
    "description": "Random", 
    "mountain_range_id": 10000000,
}

BAD_WAYPOINT_RESPONSE = {
    'data':{},
    'error':{
        'description':'ERROR:  insert or update on table "waypoint" violates foreign key constraint "waypoint_mountain_range_id_fkey"\nDETAIL:  Key (mountain_range_id)=(10000000) is not present in table "mountain_range".\n',
        'name':'Invalid Data'
    },
    'status':'client-error'
}

class TestWaypointRoutes(unittest.TestCase):
    def setUp(self) -> None:
        response = requests.get(
            f"http://{HOST}:{PORT}/login", 
            auth=rauth.HTTPBasicAuth(GOOD_LOGIN, PASSWORD)
        )
        self.cookies = response.cookies
    
    def test_no_data(self):
        response = requests.post(
            f"http://{HOST}:{PORT}/waypoint", 
            cookies=self.cookies
        )
        json_data = response.json()
        self.assertEquals(json_data, NO_DATA_RESPONSE)
        self.assertEquals(response.status_code, 400)
    
    def test_bad_data(self):
        response = requests.post(
            f"http://{HOST}:{PORT}/waypoint",
            cookies=self.cookies,
            json=BAD_WAYPOINT_DATA
        )
        json_data = response.json()
        self.assertEquals(json_data, BAD_WAYPOINT_RESPONSE)
        self.assertEquals(response.status_code, 400)


BAD_TRIP_DATA = {
    "name": "LengthMoreThen30aaaaaaaaaaaaaaaaa",
    "description": "string",
    "difficulty": "easy",
    "is_public": True, 
    "creator_id": 1, 
    "distance": 10000,
    "path_ids": [1, 2, 3]
}

BAD_TRIP_RESPONSE = {
    'data':{},
    'error':{
        'description':"'LengthMoreThen30aaaaaaaaaaaaaaaaa' is too long",
        'name':'Invalid JSON schema'
    },
    'status':'client-error'
}

class TestTripRoutes(unittest.TestCase):
    def setUp(self) -> None:
        response = requests.get(
            f"http://{HOST}:{PORT}/login", 
            auth=rauth.HTTPBasicAuth(GOOD_LOGIN, PASSWORD)
        )
        self.cookies = response.cookies
    
    def test_no_data(self):
        response = requests.post(
            f"http://{HOST}:{PORT}/trip/create_trip_plan", 
            cookies=self.cookies
        )
        json_data = response.json()
        self.assertEquals(json_data, NO_DATA_RESPONSE)
        self.assertEquals(response.status_code, 400)
    
    def test_bad_data(self):
        response = requests.post(
            f"http://{HOST}:{PORT}/trip/create_trip_plan",
            cookies=self.cookies,
            json=BAD_TRIP_DATA
        )
        json_data = response.json()
        self.assertEquals(json_data, BAD_TRIP_RESPONSE)
        self.assertEquals(response.status_code, 400)

BAD_REVIEW_DATA = {
    "badge_acquirement_id": 1,
    "reviewer_id": 1,
    "required_points": 20,
    "earned_points": 23,
    "review": "random",
}

BAD_REVIEW_RESPONSE = {
    'data':{},
    'error':{
        'description':"'random' is not one of ['accepted', 'rejected']",
        'name':'Invalid JSON schema'
    },
    'status':'client-error'
}

class TestReviewRoutes(unittest.TestCase):
    def setUp(self) -> None:
        response = requests.get(
            f"http://{HOST}:{PORT}/login", 
            auth=rauth.HTTPBasicAuth(GOOD_LOGIN, PASSWORD)
        )
        self.cookies = response.cookies
    
    def test_no_data(self):
        response = requests.post(
            f"http://{HOST}:{PORT}/review/review_badge_acquirement", 
            cookies=self.cookies
        )
        json_data = response.json()
        self.assertEquals(json_data, NO_DATA_RESPONSE)
        self.assertEquals(response.status_code, 400)
    
    def test_bad_data(self):
        response = requests.post(
            f"http://{HOST}:{PORT}/review/review_badge_acquirement",
            cookies=self.cookies,
            json=BAD_REVIEW_DATA
        )
        json_data = response.json()
        self.assertEquals(json_data, BAD_REVIEW_RESPONSE)
        self.assertEquals(response.status_code, 400)