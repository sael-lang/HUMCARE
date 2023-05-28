const mongoose = require("mongoose");

const admins = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
});

const admin = new mongoose.model("admin", admins);

module.exports = admin;
