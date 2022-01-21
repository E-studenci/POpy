from flask import abort

from po_api.database.querries.read import get_admin_by_login
from po_api.utils.errors import DBConnectionError
from po_api import BASIC_AUTH


@BASIC_AUTH.verify_password
def verify_password(username, password):
    try:
        user = get_admin_by_login(username)
    except DBConnectionError:
        abort(500)
    if user and user.password == password:
        return user
    return None


@BASIC_AUTH.error_handler
def bad_basic_auth(code):
    abort(code)