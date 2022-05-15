require('dotenv').config()
const path = require('path');
const express = require('express');
const axios = require('axios');
const db = require('../database');

const app = express();
const PORT = process.env.PORT;
const API = process.env.REACT_APP_API;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/api', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})