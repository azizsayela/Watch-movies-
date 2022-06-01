const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/koreantutor";

mongoose.connect(mongoUri, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db;
