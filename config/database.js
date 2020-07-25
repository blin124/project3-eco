// DB Config
const mongoose = require("mongoose");

const MONGODB_URI = ""
const mongoURI = "mongodb://localhost/pro3";

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