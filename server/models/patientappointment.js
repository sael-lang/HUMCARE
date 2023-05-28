const mongoose = require("mongoose");

const patientappointments = new mongoose.Schema({
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

});

const patientappointment = new mongoose.model("patientappointment", patientappointments);

module.exports = patientappointment;
