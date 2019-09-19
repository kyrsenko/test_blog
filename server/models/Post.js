const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [],
  date: { type: Date, default: Date.now },
});

module.exports = model('Post', schema);
