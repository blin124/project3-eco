
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


router.post('/current-cart', cartsController.getCurrentUserCart)
router.post('/add-product', cartsController.addToCart)

module.exports = router;