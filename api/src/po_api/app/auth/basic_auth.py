from flask import abort

from po_api.utils.errors import DBConnectionError
import po_api.database.queries.read as read
from po_api import BASIC_AUTH


@BASIC_AUTH.verify_password
def verify_password(username, password):
    try:
        user = read.auth_user(username, password)
    except DBConnectionError:
        abort(500)
    return user


@BASIC_AUTH.error_handler
def bad_basic_auth(code):
    abort(code)