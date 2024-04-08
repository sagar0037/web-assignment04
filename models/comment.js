// models/comment.js
const mongoose = require("mongoose");

// creating the data schema for the comments
const commentSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  images: [String],
  text: String,
});

// exporting the comment model
module.exports = mongoose.model("Comment", commentSchema);
