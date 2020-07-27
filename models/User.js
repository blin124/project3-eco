const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const Cart = require('./Cart');

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true});


/**
 * Password hash middleware.
 */
UserSchema.pre("save", async function save(next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }

    // login
    // enter passsword
    // bcrypt => add salt to entered password
    // encrypt
    // compare if same as db record

    await bcrypt
        .genSalt(10)
        .then((salt) => {
            return bcrypt.hash(user.password, salt);
        })
        .then((hash) => {
            user.password = hash;
            next();
        })
        .catch((err) => {
            return next(err);
        });
});

/**
 * Helper method for validating user's password.
 */
UserSchema.methods.comparePassword = function comparePassword(
    candidatePassword,
    cb
) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};


UserSchema.methods.latestCart = function latestCart(){
  const user_id = this._id;

  console.log({user_id});
  return Cart.find({
    user_id: user_id
  })
  .where('order_id')
  .equals(null)
  .then(async (carts) => {
    if(carts.length === 0){
      // create cart
      const cart = new Cart({
        user_id: user_id,
      })
      // then return the new cart
      return await cart.save()
    }

    // get the first item  
    // return the first item
    return carts[0]
  })
  
  



}

const User = mongoose.model("users", UserSchema);

module.exports = User;

// module.exports = User = mongoose.model("users", UserSchema);
