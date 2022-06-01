const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
// Single movie Schema
const MovieSchema = new mongoose.Schema({
  id: String,
  image: String,
  rank: Number,
  title: String,
  year: String,
  crew: String,
  imDbRating: Number,
});

const Films = mongoose.model("Films", MovieSchema);

module.exports = Films;
