const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CartSchema = new Schema({
  products: [{
    type: Schema.Types.ObjectId,
    ref: "products"
  }],
  order_id: {  // this is only available when cart is converted to an order
    type: Schema.Types.ObjectId,
    ref: "orders"
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
}, {timestamps: true});

CartSchema.virtual('order', {
  ref: "Order",
  localField: 'order_id',
  foreignField: 'cart_id',
  justOne: true,
})

CartSchema.methods.addProduct = function addProduct(product_id){
  if(!product_id){
    throw new Error('this is not a product M8 !!!!!');
  }
  const id = mongoose.Types.ObjectId(product_id);
  this.products.push(id)
  return this.save()
}

const Cart = mongoose.model("carts", CartSchema);



module.exports = Cart;