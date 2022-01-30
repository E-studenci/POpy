from po_api.app.response_parser import ResponseData, response_wrapper, ResponseError
from flask_login import login_required
from flask import jsonify, request, Flask
from po_api import APP

import po_api.utils.json_validation.json_schemas as schemas
import po_api.database.queries.read as read
import po_api.database.queries.create as create
import po_api.database.queries.update as update
import po_api.database.queries.delete as delete
import po_api.database.orm.models as models

PATH_PATH="/path"

@APP.route(f'{PATH_PATH}', methods=['GET'])
@login_required
@response_wrapper()
def get_all_paths():
    paths = read.get_all_paths()
    return ResponseData(
        code=200,
        data=jsonify(data=paths).json["data"]
    )

@APP.route(f'{PATH_PATH}/<path_id>', methods=['GET'])
@login_required
@response_wrapper()
def get_path(path_id: int):
    result = read.get_path_by_id(path_id)
    if result:
        return ResponseData(
        code=200,
        data=jsonify(data=result).json["data"]
        )
    return ResponseData(
        code=400,
        error = ResponseError(name="Invalid Data", description="path not found") )

@APP.route(f'{PATH_PATH}/from_waypoint/<waypoint_id>', methods=['GET'])
@login_required
@response_wrapper()
def get_paths_from_waypoint(waypoint_id: int):
    wp = read.get_waypoint_by_id(waypoint_id)
    if not wp:
        return ResponseData(
        code=400,
        error = ResponseError(name="Invalid Data", description="waypoint not found") )
    result = read.get_all_paths(False, waypoint_id)
    return ResponseData(
    code=200,
    data=jsonify(data=result).json["data"]
    )
    


@APP.route(f'{PATH_PATH}', methods=['POST'])
@login_required
@response_wrapper(schemas.CREATE_PATH_SCHEMA)
def create_path():
    json_data = request.json
    result = create.create_path(json_data)
    if isinstance(result, str):
         return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description=result)
        )
    return ResponseData(
        code=200
    )

@APP.route(f'{PATH_PATH}/<path_id>', methods=['PATCH'])
@login_required
@response_wrapper(schemas.EDIT_PATH_SCHEMA)
def edit_path(path_id: int):
    json_data = request.json
    result = update.update_path(path_id, json_data)
    if isinstance(result, str):
         return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description=result)
        )
    if result.rowcount == 0:
        return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description="Path not found")
        )
    return ResponseData(
        code=200
    )

@APP.route(f'{PATH_PATH}/<path_id>', methods=['DELETE'])
@login_required
@response_wrapper()
def delete_path(path_id: int):
    result = update.update_path(path_id, {"status": models.PathStatus.closed})
    if isinstance(result, str):
         return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description=result)
        )
    if result.rowcount == 0:
        return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description="Path not found")
        )
    return ResponseData(
        code=200
    )