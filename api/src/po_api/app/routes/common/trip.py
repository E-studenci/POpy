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

TRIP_PATH = "/trip"

@APP.route(f'{TRIP_PATH}/<trip_id>', methods=['GET'])
@login_required
@response_wrapper()
def get_trip(trip_id: int):
    result = read.get_trip(trip_id)
    if result:
        return ResponseData(
        code=200,
        data=jsonify(results=result).response[0]
        )
    return ResponseData(
        code=400,
        error = ResponseError(name="Invalid Data", description="trip not found") )

@APP.route(f'{TRIP_PATH}/create_trip_plan', methods=['POST'])
@login_required
@response_wrapper(schemas.CREATE_TRIP_PLAN_SCHEMA)
def create_trip_plan():
    json_data = request.json
    result = create.create_trip_plan(json_data)
    if isinstance(result, str):
         return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description=result)
        )
    return ResponseData(
        code=200
    )
