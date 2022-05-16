const mongoose = require('mongoose');
const { Schema } = mongoose;

const responsesSchema = new Schema({
    id: String,
    created: Number,
    prompt: String,
    response: String
})

const Responses = mongoose.model('Responses', responsesSchema);

module.exports = Responses;