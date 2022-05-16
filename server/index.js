require('dotenv').config()
const path = require('path');
const express = require('express');
const axios = require('axios');
require('../database');
const controller = require('../database/controller');

const app = express();

const PORT = process.env.PORT;
const KEY = process.env.API_KEY;
const API = process.env.API;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/app', (req, res) => {
  controller.readData((err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  })
});

app.post('/submit', (req, res) => {
  const prompt = req.body.prompt;
  const request = {
    prompt, 
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0
  }
  const auth = {
    headers: {
      'Authorization': `Bearer ${KEY}`
    }
  }

  axios.post(API, request, auth)
    .then((apiRes) => {
      apiRes.data.prompt = prompt;
    
      controller.createData(apiRes.data, err => {
        if (err) {
          res.sendStatus(400);
        } else {
          controller.readData((err, data) => {
            if (err) {
              res.sendStatus(404);
            } else {
              res.status(201).send(data);
            }
          })
        }
      })
    })
    .catch((err) => {
      res.status(400);
    })
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})