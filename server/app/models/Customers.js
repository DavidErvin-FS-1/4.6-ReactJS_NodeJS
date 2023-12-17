const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid phone number! (Use format: xxx-xxx-xxxx)`,
    },
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Customer', customerSchema);
