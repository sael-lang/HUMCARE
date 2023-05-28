const mongoose = require("mongoose");

const doctors = new mongoose.Schema({
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
  roomnumber: {
    type: String,
    required: true,
  },
  daysavailable: {
    type: String,
    required: true,
  },
  timeavailable: {
    type: String,
    required: true,
  },

});

const doctor = new mongoose.model("doctors", doctors);

module.exports = doctor;
