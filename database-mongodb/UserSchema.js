const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
// Single movie Schema
const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  role: {
    type: String,
    default: "logged",
  },
  films: [String],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
