const mongoose = require("mongoose");

const  patientss = new mongoose.Schema({
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
  patienttype: {
    type: String,
  },
  patientstatus: {
    type: String,
  },
  details: {
    type: String,
  },

});

const patient = new mongoose.model(" patient",  patientss);

module.exports = patient;
