const { Schema, model } = require('mongoose');

var schema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [],
  date: { type: Date, default: Date.now },
});

module.exports = model('Post', schema);
