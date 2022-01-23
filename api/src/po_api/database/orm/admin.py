
from dataclasses import dataclass, field

from po_api.database.orm.model import Model


@dataclass
class Admin(Model):
    _id: str = field(init=True, default=None)
    login: str = field(init=True, default=None)
    password: str = field(init=True, default=None)

    @property ## TODO: add to user
    def is_active(self):
        return True

    @property
    def is_authenticated(self):
        return True

    @property
    def is_anonymous(self):
        return False

    def get_id(self):
        return self._id

    def __eq__(self, other):
        if isinstance(other, self.__class__):
            return self.get_id() == other.get_id()
        return False

    def __ne__(self, other):
        return not self.__eq__(other)