import unittest
import click

import po_api.tests.e2e as e2e
import po_api.tests.unit as unit

@click.group()
def cli():
    pass


@cli.command()
def e2e_tests():
    suite = unittest.TestLoader().loadTestsFromModule(e2e)
    unittest.TextTestRunner(verbosity=2).run(suite)


@cli.command()
def unit_tests():
    suite = unittest.TestLoader().loadTestsFromModule(unit)
    unittest.TextTestRunner(verbosity=2).run(suite)
