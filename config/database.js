// DB Config
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
const mongoURI = "mongodb://admin:secret1@ds059165.mlab.com:59165/heroku_9r0p3wvn"

function connectDb(){

    // Connect to MongoDB
    mongoose.connect( MONGODB_URI || mongoURI, {
      useNewUrlParser: true,
      useFindAndModify: false
    })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

}

module.exports = connectDb