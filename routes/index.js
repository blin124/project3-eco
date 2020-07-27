const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/user-routes");
const product = require("./api/product");
const cart = require("./api/cart");

// API Routes
router.use(apiRoutes);

router.use('/api/carts', cart);

// Product Controller
router.use("/api/products", product);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
