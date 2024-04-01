// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const Order = require("../models/order");

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single order
router.get("/:id", getOrder, (req, res) => {
  res.json(res.order);
});

// Create a new order
router.post("/", async (req, res) => {
  const order = new Order({
    products: req.body.products,
    user: req.body.user,
    totalPrice: req.body.totalPrice,
    shippingAddress: req.body.shippingAddress,
  });
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an order
router.delete("/:id", getOrder, async (req, res) => {
  try {
    await res.order.remove();
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getOrder(req, res, next) {
  try {
    const order = await Order.findById(req.params.id);
    if (order == null) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.order = order;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
