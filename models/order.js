// models/order.js
const mongoose = require("mongoose");

// creating the data schema for the orders
const orderSchema = new mongoose.Schema({
  orderId: mongoose.Schema.Types.ObjectId,
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  shippingAddress: String,
});

// exporting the order model
module.exports = mongoose.model("Order", orderSchema);
