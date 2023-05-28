const mongoose = require("mongoose");

const logins = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  role:{
    type: String,
    required: true,
  },
});

const login = new mongoose.model("login", logins);

module.exports = login;
