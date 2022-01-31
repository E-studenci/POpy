import requests.auth as rauth
import requests
import unittest
import po_api

HOST = "localhost"
PORT = 5000
LOGIN = 'notexistingaccount'
PASSWORD = 'password'

RESPONSE_401 = {
    "data": {},
    "error": {
        "description": "The server could not verify that you are authorized to access the URL requested. You either supplied the wrong credentials (e.g. a bad password), or your browser doesn't understand how to supply the credentials required.",
        "name": "Unauthorized"
    },
    "status": "client-error"
}

class TestLoginRoutes(unittest.TestCase):
    def setUp(self):
        po_api.run_app(HOST, PORT)
    
    def test_failed_login(self):
        response = requests.get(
            f"http://{HOST}:{PORT}/login", 
            auth=rauth.HTTPBasicAuth(LOGIN, PASSWORD)
        )
        json_data = response.json()
        self.assertEquals(response.status_code, 401)
        self.assertEquals(json_data, RESPONSE_401)
        
