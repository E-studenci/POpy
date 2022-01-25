from po_api.app.response_parser import ResponseData, response_wrapper, ResponseError
from po_api import APP, BASIC_AUTH
from flask import jsonify, request
import po_api.utils.json_validation.json_schemas as schemas
import po_api.database.queries.read as read
import po_api.database.queries.create as create
import po_api.database.queries.update as update
import po_api.database.queries.delete as delete

@APP.route('/get_all_mountain_ranges', methods=['GET'])
@BASIC_AUTH.login_required
@response_wrapper()
def get_all_mountain_ranges():
    mountain_ranges = read.get_all_mountain_ranges()
    return ResponseData(
        code=200,
        data=jsonify(results=mountain_ranges).response[0]
    )

@APP.route('/create_waypoint', methods=['PUT'])
@BASIC_AUTH.login_required
@response_wrapper(schemas.CREATE_WAYPOINT_SCHEMA)
def create_waypoint():
    json_data = request.json
    if read.get_waypoint_by_name(json_data["name"]):
        return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description="waypoint name already used")
        )
    create.create_waypoint(json_data)
    
    return ResponseData()


@APP.route('/get_trip/<trip_id>', methods=['GET'])
@BASIC_AUTH.login_required
@response_wrapper()
def get_trip(trip_id: str):
    
    return ResponseData()


@APP.route('/review_participation', methods=['POST'])
@BASIC_AUTH.login_required
@response_wrapper(schemas.REVIEW_PARTICIPATION_SCHEMA)
def review_participation():
    
    return ResponseData()


@APP.route('/get_pending_badge_acquirements', methods=['GET'])
@BASIC_AUTH.login_required
@response_wrapper()
def get_pending_badge_acquirements():
    
    return ResponseData()


@APP.route('/review_badge_acquirement', methods=['POST'])
@BASIC_AUTH.login_required
@response_wrapper(schemas.REVIEW_BADGE_ACQUIREMENT_SCHEMA)
def review_badge_acquirement():
    
    return ResponseData()


@APP.route('/create_user', methods=['PUT'])
@BASIC_AUTH.login_required
@response_wrapper(schemas.CREATE_USER_SCHEMA)
def create_user():
    
    return ResponseData()


@APP.route('/get_all_waypoints', methods=['GET'])
@BASIC_AUTH.login_required
@response_wrapper()
def get_all_waypoints():
    
    return ResponseData()


@APP.route('/get_paths_from_waypoint/<waypoint_id>', methods=['GET'])
@BASIC_AUTH.login_required
@response_wrapper()
def get_paths_from_waypoint(waypoint_id: str):
    
    return ResponseData()


@APP.route('/create_trip_plan', methods=['PUT'])
@BASIC_AUTH.login_required
@response_wrapper(schemas.CREATE_TRIP_PLAN_SCHEMA)
def create_trip_plan():
    
    return ResponseData()


@APP.route('/get_all_paths', methods=['GET'])
@BASIC_AUTH.login_required
@response_wrapper()
def get_all_paths():
    
    return ResponseData()


@APP.route('/create_path', methods=['PUT'])
@BASIC_AUTH.login_required
@response_wrapper(schemas.CREATE_PATH_SCHEMA)
def create_path():
    
    return ResponseData()


@APP.route('/edit_path/<path_id>', methods=['PATCH'])
@BASIC_AUTH.login_required
@response_wrapper(schemas.EDIT_PATH_SCHEMA)
def edit_path(path_id: str):
    
    return ResponseData()

@APP.route('/delete_path/<path_id>', methods=['PATCH'])
@BASIC_AUTH.login_required
@response_wrapper()
def delete_path(path_id: str):
    
    return ResponseData()