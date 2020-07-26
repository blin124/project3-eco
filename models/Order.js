const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
  cart_id: {
    type: Schema.Types.ObjectId,
    ref: "cart",
    required: true
  },
  // products: [{
  //   type: mongoose.Schema.Types.Mixed,
  //   ref: "products"
  // }],
  // user_id: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "users"
  // },
  status: {
    type: String,
    required: true
  }
}, {timestamps: true});

const Order = mongoose.model("orders", OrderSchema);

module.exports = Order;
