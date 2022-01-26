from po_api.app.response_parser import ResponseData, response_wrapper, ResponseError
from po_api import APP, BASIC_AUTH
from flask import jsonify, request
import po_api.utils.json_validation.json_schemas as schemas
import po_api.database.queries.read as read
import po_api.database.queries.create as create
import po_api.database.queries.update as update
import po_api.database.queries.delete as delete
import po_api.database.orm.models as models

USER_PATH="/user"

@APP.route(f'{USER_PATH}/create', methods=['PUT'])
@BASIC_AUTH.login_required
@response_wrapper(schemas.CREATE_USER_SCHEMA)
def create_user():
    json_data = request.json
    result = create.create_user(json_data)
    if isinstance(result, str):
         return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description=result)
        )
    return ResponseData(
        code=200
    )
