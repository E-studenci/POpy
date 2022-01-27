from po_api import LOGIN_MANAGER
import po_api.database.queries.read as read


@LOGIN_MANAGER.user_loader
def load_user(user_id):
    return read.get_user_by_id(user_id)
