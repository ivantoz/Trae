const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Trae API' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

module.exports = app;