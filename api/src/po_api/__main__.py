import unittest
import time

import po_api.tests.e2e as e2e
import po_api.tests.unit as unit
import threading
import po_api

thread = threading.Thread(target=po_api.run_app, daemon=True)
thread.start()

time.sleep(3)
print()

suite1 = unittest.TestLoader().loadTestsFromModule(unit)
unittest.TextTestRunner(verbosity=2).run(suite1)

suite2 = unittest.TestLoader().loadTestsFromModule(e2e)
unittest.TextTestRunner(verbosity=2).run(suite2)
