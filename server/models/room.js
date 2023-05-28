const mongoose = require("mongoose");

const rooms = new mongoose.Schema({
  Roomnumber: {
    type: String,
  },
  available: {
    type: String,
  },
  patientassigned:{
    type: String,
  },
  doctorassigned: {
    type: String,
  },
  daysavailable: {
    type: String,
  },
  timeavailable: {
    type: String,
  },
  time: {
    type: String,
  },

});

const room = new mongoose.model("rooms", rooms);

module.exports = room;
