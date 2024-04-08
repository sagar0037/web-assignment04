// api.js
const express = require("express");
const router = express.Router();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/carts", cartRoutes);
router.use("/orders", orderRoutes);

module.exports = router;
