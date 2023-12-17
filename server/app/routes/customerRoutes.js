const router = require('express').Router();
const {
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  createCustomer,
  deleteCustomer,
} = require('../controllers/customerContoller');

// GET from /api/v1/customer
router.get('/', getAllCustomers);

// GET from /api/v1/customer/:id
router.get('/:id', getCustomerById);

// POST to /api/v1/customer
router.post('/', createCustomer);

// PUT to /api/v1/customer/:id
router.put('/:id', updateCustomer);

// DELETE from /api/v1/customer/:id
router.delete('/:id', deleteCustomer);

module.exports = router;
