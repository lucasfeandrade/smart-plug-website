const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'src')));

// Always return the main index.html, so react-router render the route in the client
app.get('/api', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '..', 'src', 'index.html'));
  res.setHeader('Content-Type', 'application/json');
  res.json({test: 'this is a test'})
});

module.exports = app;
