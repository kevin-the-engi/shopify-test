const Responses = require('../model/');

const createData = ({ id, created, choices, prompt }, callback) => {
  const response = choices[0].text;
  const data = {
    id, created, prompt, response
  }
  const newResponse = new Responses(data);

  newResponse.save(err => {
    if (err) {
      callback(err, null);
    } else {
      readData(callback);
    }
  })
}

const readData = (callback) => {
  Responses.find({}).sort({created: -1}).exec((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
}

module.exports = {
  createData,
  readData
}