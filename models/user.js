// models/user.js
const mongoose = require("mongoose");

// creating the data schema for the users
const userSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  purchaseHistory: [String],
  shippingAddress: {
    type: String,
    required: true,
  },
});

// exporting the user model
module.exports = mongoose.model("User", userSchema);