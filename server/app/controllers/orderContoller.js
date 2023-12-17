const Order = require('../models/Orders')
const { errorHandler } = require('../helpers/errorHandler')
const Messages = require('../helpers/messages')

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).select('-__v').populate('customer')

    res.status(200).json({
      data: orders,
      success: true,
      message: Messages.getAllOrders(req.method),
    })
  } catch (error) {
    errorHandler(res, 500, Messages.serverError, error)
  }
}

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order.findById(id).select('-__v').populate('customer')

    if (!order) {
      return res.status(404).json({
        success: false,
        message: Messages.notFound,
      })
    }

    res.status(200).json({
      data: order,
      success: true,
      message: Messages.getOrderById(req.method),
    })
  } catch (error) {
    errorHandler(res, 500, Messages.serverError, error)
  }
}

const createOrder = async (req, res) => {
  try {
    const data = req.body
    const order = await Order.create(data)
    console.log(order)

    res.status(200).json({
      success: true,
      message: Messages.createOrder(req.method),
    })
  } catch (error) {
    errorHandler(res, 500, Messages.serverError, error)
  }
}

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const order = await Order.findByIdAndUpdate(id, data, {
      new: true,
    }).select('-__v')

    if (!order) {
      return res.status(404).json({
        success: false,
        message: Messages.notFound,
      })
    }

    console.log(order)

    res.status(200).json({
      data: order,
      success: true,
      message: Messages.updateOrder(req.method),
    })
  } catch (error) {
    errorHandler(res, 500, Messages.serverError, error)
  }
}

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order.findByIdAndDelete(id).select('-__v')

    if (!order) {
      return res.status(404).json({
        success: false,
        message: Messages.notFound,
      })
    }

    console.log(order)

    res.status(200).json({
      id,
      message: Messages.deleteOrder(req.method),
      success: true,
    })
  } catch (error) {
    errorHandler(res, 500, Messages.serverError, error)
  }
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
}
