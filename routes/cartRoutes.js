// routes/cartRoutes.js
const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

// Get all carts
router.get("/", async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single cart
router.get("/:id", getCart, (req, res) => {
  res.json(res.cart);
});

// Create a new cart
router.post("/", async (req, res) => {
  const cart = new Cart({
    products: req.body.products,
    user: req.body.user,
  });
  try {
    const newCart = await cart.save();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update a cart details
router.patch("/:id", getCart, async (req, res) => {
  if (req.body.products != null) {
    res.cart.products = req.body.products;
  }
  if (req.body.user != null) {
    res.cart.user = req.body.user;
  }
  try {
    const updatedCart = await res.cart.save();
    res.json(updatedCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete a cart by id
router.delete("/:id", getCart, async (req, res) => {
  try {
    await res.cart.deleteOne();
    res.json({ message: "Cart is deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// find cart details
async function getCart(req, res, next) {
  try {
    const cart = await Cart.findById(req.params.id);
    if (cart == null) {
      return res.status(404).json({ message: "Cart not found!!" });
    }
    res.cart = cart;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = router;
