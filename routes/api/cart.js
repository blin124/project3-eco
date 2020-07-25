
const router = require("express").Router();
const cartsController = require("../../controllers/cartsController");

// Matches with "/api/carts"
router.route("/")
  .get(cartsController.findAll)
  // .post(cartsController.create);

// Matches with "/api/carts/:id"
router
  .route("/:id")
  .get(cartsController.findById)
  .put(cartsController.update)
  .delete(cartsController.remove);

module.exports = router;