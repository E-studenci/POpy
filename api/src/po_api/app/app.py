from sqlalchemy.exc import SQLAlchemyError
from flask import Flask
import typing as t
import os

from po_api.utils.errors import DBConnectionError
from po_api.utils.config import Environment


class App(Flask):
    def __init__(
            self, 
            import_name: str, 
            env: Environment, 
            static_url_path: t.Optional[str] = None, 
            static_folder: t.Optional[t.Union[str, os.PathLike]] = "static", 
            static_host: t.Optional[str] = None, 
            host_matching: bool = False, 
            subdomain_matching: bool = False, 
            template_folder: t.Optional[str] = "templates", 
            instance_path: t.Optional[str] = None, 
            instance_relative_config: bool = False,
            root_path: t.Optional[str] = None
        ) -> None:
        super().__init__(
            import_name, 
            static_url_path=static_url_path, 
            static_folder=static_folder, 
            static_host=static_host, 
            host_matching=host_matching,
            subdomain_matching=subdomain_matching,
            template_folder=template_folder, 
            instance_path=instance_path, 
            instance_relative_config=instance_relative_config,
            root_path=root_path
        )
        self.env = env
