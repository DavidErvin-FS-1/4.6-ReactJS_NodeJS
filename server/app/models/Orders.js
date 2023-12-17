const mongoose = require('mongoose');
const moment = require('moment');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  products: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered'],
    default: 'Pending',
  },
});

module.exports = mongoose.model('Order', orderSchema);
