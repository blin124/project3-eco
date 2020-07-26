const db = require("../models/Cart");

// Defining methods for the cartsController
module.exports = {
  getCurrentUserCart: function (req, res){
    const user = req.user;


    db.find({
      user_id: user._id

    })
    .where('order_id')
    .equals(null)
    .then((carts) => {

      res.json(carts)
    })

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