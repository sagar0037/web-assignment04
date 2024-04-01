// models/product.js
const mongoose = require("mongoose");

// creating the data schema for the products
const productSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  description: {
    type: String,
    required: true,
  },
  image: String,
  pricing: {
    type: Number,
    required: true,
  },
  shippingCost: {
    type: Number,
    required: true,
  },
});

// exporting the product model
module.exports = mongoose.model("Product", productSchema);
