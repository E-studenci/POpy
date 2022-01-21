from po_api.database.querries.read import get_admin_by_id
from po_api import LOGIN_MANAGER


@LOGIN_MANAGER.user_loader
def load_user(admin_id):
    return get_admin_by_id(admin_id)
