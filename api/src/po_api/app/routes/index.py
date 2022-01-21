from po_api.app.response_parser import ResponseData, response_wrapper
from po_api import APP


@APP.route("/")
@response_wrapper()
def index():
    return ResponseData(
        data = 'OK',
        code = 200
    )

