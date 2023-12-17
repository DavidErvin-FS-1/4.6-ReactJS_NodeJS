// error-handler.js

const errorHandler = (res, status, message, error) => {
  console.error(error); // Log the error for debugging purposes

  res.status(status).json({
    success: false,
    message,
    error: error.message,
  });
};

module.exports = {
  errorHandler,
};
