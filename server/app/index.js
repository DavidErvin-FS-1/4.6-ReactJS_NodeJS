// app/index.js

const express = require('express');
const morgan = require('morgan');

const routeHandler = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API is running!',
    success: true,
  });
});

app.use('/api/v1', routeHandler);

module.exports = app;
