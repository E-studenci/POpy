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

WAYPOINT_PATH="/waypoint"

@APP.route(f'{WAYPOINT_PATH}/get_mountain_ranges', methods=['GET'])
@login_required
@response_wrapper()
def get_all_mountain_ranges():
    mountain_ranges = read.get_all_mountain_ranges()
    return ResponseData(
        code=200,
        data=jsonify(results=mountain_ranges).response[0]
    )


@APP.route(f'{WAYPOINT_PATH}', methods=['POST'])
@login_required
@response_wrapper(schemas.CREATE_WAYPOINT_SCHEMA)
def create_waypoint():
    json_data = request.json
    if read.get_waypoint_by_name(json_data["name"]):
        return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description="waypoint name already used")
        )
    result = create.create_waypoint(json_data)
    if isinstance(result, str):
         return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description=result)
        )
    return ResponseData(
        code=200
    )

@APP.route(f'{WAYPOINT_PATH}', methods=['GET'])
@login_required
@response_wrapper()
def get_all_waypoints():
    waypoints = read.get_all_waypoints()
    return ResponseData(
        code=200,
        data=jsonify(results=waypoints).response[0]
    )