from po_api.app.response_parser import ResponseData, response_wrapper, ResponseError
from flask_login import login_required
from flask import jsonify, request
from po_api import APP

import po_api.utils.json_validation.json_schemas as schemas
import po_api.database.queries.read as read
import po_api.database.queries.create as create
import po_api.database.queries.update as update
import po_api.database.queries.delete as delete
import po_api.database.orm.models as models

USER_PATH="/user"

@APP.route(f'{USER_PATH}', methods=['POST'])
@response_wrapper(schemas.CREATE_USER_SCHEMA)
def create_user():
    json_data = request.json
    role = read.get_role(json_data.pop("role"))
    if not role:
        return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description="role not found")
        )
    args = json_data.pop("args")
    result = create.create_user(json_data, role.id, args)
    if isinstance(result, str):
        if result.__contains__("already exists"):
            if result.__contains__("Key (login)"):
                result = "Podany login jest juz wykorzystany"
            if result.__contains__("Key (email)"):
                result = "Podany email jest juz wykorzystany"
        return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description=result)
        )
    return ResponseData(
        code=200
    )
