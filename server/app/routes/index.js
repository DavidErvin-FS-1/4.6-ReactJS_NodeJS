// app/routes/index.js

const express = require('express');
const customerRoutes = require('./customerRoutes');
const orderRoutes = require('./orderRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: `${req.method} - Request received!`,
    success: true,
  });
});

router.use('/customer', customerRoutes);
router.use('/order', orderRoutes);

module.exports = router;
