// models/cart.js
const mongoose = require("mongoose");

// creating the data schema for the carts
const cartSchema = new mongoose.Schema({
  cartId: mongoose.Schema.Types.ObjectId,
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
});

// exporting the cart model
module.exports = mongoose.model("Cart", cartSchema);
