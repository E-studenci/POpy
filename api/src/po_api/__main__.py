import unittest

import po_api.tests.unit as unit
import po_api.tests.e2e as e2e


suite = unittest.TestLoader().loadTestsFromModule(unit)
unittest.TextTestRunner(verbosity=2).run(suite)