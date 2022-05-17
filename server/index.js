require('dotenv').config()
const path = require('path');
const express = require('express');
const axios = require('axios');
require('../database');
const controller = require('../database/controller');

const app = express();

const PORT = process.env.PORT || 3001;
const API = process.env.API || 'https://api.openai.com/v1/engines';
const KEY = {
  headers: {
    'Authorization': `Bearer ${process.env.API_KEY}`
  }
}

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

// Get route to get collected prompt/response data
app.get('/app', (req, res) => {
  controller.readData((err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  })
});

// Get route to get list of engines
app.get('/engines', (req, res) => {
  axios.get(API, KEY)
    .then(engines => {
      const ids = engines.data.data.map(engine => engine.id)

      res.status(200).send(ids)
    })
    .catch(err => {
      res.sendStatus(404);
    })
});

// POST route to query API with prompt and save data to database
app.post('/submit', (req, res) => {
  const prompt = req.body.prompt; 
  const engine = req.body.engine;
  const request = {
    prompt, 
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0
  }
  const engineAPI = API + `/${engine}/` + 'completions';
  
  // Query API with prompt from user
  axios.post(engineAPI, request, KEY)
    .then((apiRes) => {
      apiRes.data.prompt = prompt;

      // Save prompt and response data from API to database
      controller.createData(apiRes.data, (err, data) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.status(201).send(data);
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