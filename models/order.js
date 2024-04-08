// models/order.js
const mongoose = require("mongoose");

// creating the data schema for the orders
const orderSchema = new mongoose.Schema({
  recordingOfSale: {
    type: String,
    required: true,
  },
});

// exporting the order model
module.exports = mongoose.model("Order", orderSchema);
