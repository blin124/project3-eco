const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CartSchema = new Schema({
  products: [{
    type: Schema.Types.ObjectId,
    ref: "products"
  }],
  order_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "orders"
  }
  // user_id: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User"
  // }
}, {timestamps: true});

const Cart = mongoose.model("carts", CartSchema);

module.exports = Cart;