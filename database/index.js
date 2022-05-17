require('dotenv').config()
const mongoose = require('mongoose');
const HOST = process.env.HOST || 'localhost:27017';

mongoose.connect(`mongodb://${HOST}/openai`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', () => {
  console.log('connection error:')
});

db.once('open', () => {
  console.log('connected to MongoDB');
});

module.exports = db;