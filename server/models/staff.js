const mongoose = require("mongoose");

const staffsc = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

const staff = new mongoose.model("staffs", staffsc);

module.exports = staff;
