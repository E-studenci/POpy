from setuptools import setup, find_packages
from distutils.core import setup

setup(
    name='po_api',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'attrs==21.4.0',
        'click==8.0.3',
        'colorama==0.4.4',
        'Flask==2.0.2',
        'Flask-HTTPAuth==4.5.0',
        'Flask-Login==0.5.0',
        'greenlet==1.1.2',
        'itsdangerous==2.0.1',
        'Jinja2==3.0.3',
        'jsonschema==4.4.0',
        'MarkupSafe==2.0.1',
        'pyrsistent==0.18.1',
        'SQLAlchemy==1.4.31',
        'Werkzeug==2.0.2',
    ],
    include_package_data=True
)
