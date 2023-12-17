const router = require('express').Router();
const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderContoller');

// GET from /api/v1/order
router.get('/', getAllOrders);

// GET from /api/v1/order/:id
router.get('/:id', getOrderById);

// POST to /api/v1/order
router.post('/', createOrder);

// PUT to /api/v1/order/:id
router.put('/:id', updateOrder);

// DELETE from /api/v1/order/:id
router.delete('/:id', deleteOrder);

module.exports = router;
