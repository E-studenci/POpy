from po_api import LOGIN_MANAGER
import po_api.database.queries.read as read


@LOGIN_MANAGER.user_loader
def load_user(admin_id):
    return read.get_admin_by_id(admin_id)
