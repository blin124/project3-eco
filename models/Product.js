const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  stock_count: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  cost: {
    type: String,
    required: true
  }
}, {timestamps: true});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
