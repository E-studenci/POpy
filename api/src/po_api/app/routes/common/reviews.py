from po_api.app.response_parser import ResponseData, response_wrapper, ResponseError
from po_api import APP, BASIC_AUTH
from flask import jsonify, request
import po_api.utils.json_validation.json_schemas as schemas
import po_api.database.queries.read as read
import po_api.database.queries.create as create
import po_api.database.queries.update as update
import po_api.database.queries.delete as delete
import po_api.database.orm.models as models

REVIEW_PATH="/review"

@APP.route(f'{REVIEW_PATH}/get_pending_badge_acquirements', methods=['GET'])
@BASIC_AUTH.login_required
@response_wrapper()
def get_pending_badge_acquirements():
    pending_badge_acquirements = read.get_pending_badge_acquirements()
    return ResponseData(
        code=200,
        data=jsonify(results=pending_badge_acquirements).response[0]
    )

@APP.route(f'{REVIEW_PATH}/review_participation', methods=['POST'])
@BASIC_AUTH.login_required
@response_wrapper(schemas.REVIEW_PARTICIPATION_SCHEMA)
def review_participation():
    json_data = request.json
    result = create.review_participation(json_data)
    if isinstance(result, str):
         return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description=result)
        )
    return ResponseData(
        code=200
    )


@APP.route(f'{REVIEW_PATH}/review_badge_acquirement', methods=['POST'])
@BASIC_AUTH.login_required
@response_wrapper(schemas.REVIEW_BADGE_ACQUIREMENT_SCHEMA)
def review_badge_acquirement():
    json_data = request.json
    result = create.review_badge_acquirement(json_data)
    if isinstance(result, str):
         return ResponseData(
            code = 400,
            error = ResponseError(name="Invalid Data", description=result)
        )
    return ResponseData(
        code=200
    )