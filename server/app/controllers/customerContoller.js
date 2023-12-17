const Customer = require('../models/Customers');
const { errorHandler } = require('../helpers/errorHandler');

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});

    res.status(200).json({
      data: customers,
      success: true,
      message: `${req.method} - Request all customers!`,
    });
  } catch (error) {
    errorHandler(res, 500, 'Server error', error);
  }
};

const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    console.log(customer);

    res.status(200).json({
      data: customer,
      success: true,
      message: `${req.method} - Request a customer!`,
    });
  } catch (error) {
    errorHandler(res, 500, 'Server error', error);
  }
};

const createCustomer = async (req, res) => {
  try {
    const data = req.body;
    const customer = await Customer.create(data);
    console.log(customer);

    res.status(200).json({
      success: true,
      message: `${req.method} - Create a customer!`,
    });
  } catch (error) {
    errorHandler(res, 500, 'Server error', error);
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const customer = await Customer.findByIdAndUpdate(id, data, {
      new: true,
    });
    console.log(customer);

    res.status(200).json({
      data: customer,
      success: true,
      message: `${req.method} - Update a customer!`,
    });
  } catch (error) {
    errorHandler(res, 500, 'Server error', error);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    console.log(customer);

    res.status(200).json({
      id,
      message: `${req.method} - Delete a customer!`,
      success: true,
    });
  } catch (error) {
    errorHandler(res, 500, 'Server error', error);
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
