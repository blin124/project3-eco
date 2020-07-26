const db = require("../models/Cart");
const user = require("../models/User");

// Defining methods for the cartsController
module.exports = {

  addToCart: async function(req, res){
    const product_id = req.body.product_id;

    console.log(req.user);


    // find latest cart
    const cart = await req.user.latestCart()

    // add product to cart

    const updated = await cart.addProduct(product_id)

    res.json(updated)

  },

  getCurrentUserCart: async function (req, res){
    console.log('helloooooo22');

    console.log(req.user);
    // const currentUser = user.find({
    //   _id: req.user._id
    // })
    const cart = await req.user.latestCart()

    await cart.populate('products').execPopulate();

    res.json(cart)
  },
  findAll: function(req, res) {
    db
      .find(req.body)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel.populate('products')))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db
      .findById(req.params.id)
      .populate('products')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};