// models/user.js
const mongoose = require("mongoose");

// creating the data schema for the users
const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  purchaseHistory: [String],
  shippingAddress: String,
});

// exporting the user model
module.exports = mongoose.model("User", userSchema);
