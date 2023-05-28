const mongoose = require("mongoose");

const payments = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const payment = new mongoose.model("payment", payments);

module.exports = payment;
