import axios from "axios";

export default {
  // Gets all products
  getProducts: function() {
    return axios.get("/api/products/")
  },
  // Gets the product with the given id
  getProducts_id: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProducts: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProducts: function(productData) {
    return axios.post("/api/products", productData);
  },


  // Gets all carts
  getCarts: function() {
    return axios.get("/carts/")
  },
  // Gets the cart with the given id
  getCarts_id: function(id) {
    return axios.get("/carts/" + id);
  },
  // Deletes the cart with the given id
  deleteCarts: function(id) {
    return axios.delete("/carts/" + id);
  },
  // Saves a cart to the database
  saveCarts: function(cartData) {
    return axios.post("/carts", cartData);
  },



};