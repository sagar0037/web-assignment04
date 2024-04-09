// routes/commentRoutes.js
const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");

// Get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a comment by id
router.get("/:id", getComment, (req, res) => {
  res.json(res.comment);
});

// Create a new comment
router.post("/", async (req, res) => {
  const comment = new Comment({
    product: req.body.product,
    user: req.body.user,
    rating: req.body.rating,
    images: req.body.images,
    text: req.body.text,
  });
  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a comment by id
router.patch("/:id", getComment, async (req, res) => {
  if (req.body.rating != null) {
    res.comment.rating = req.body.rating;
  }
  if (req.body.images != null) {
    res.comment.images = req.body.images;
  }
  if (req.body.text != null) {
    res.comment.text = req.body.text;
  }
  try {
    const updatedComment = await res.comment.save();
    res.json(updatedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a comment by id
router.delete("/:id", getComment, async (req, res) => {
  try {
    await res.comment.deleteOne();
    res.json({ message: "Comment is deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getComment(req, res, next) {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment == null) {
      return res.status(404).json({ message: "Comment not found!!" });
    }
    res.comment = comment;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
