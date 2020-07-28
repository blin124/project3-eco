const express = require("express");
const session = require("express-session");
// const cors = require('cors');
// const corsConfig = require('./config/cors');
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const routes = require("./routes");
const passport = require("passport");
const app = express();
const dotenv = require("dotenv");
const database = require('./config/database');
// const MongoStore = require("connect-mongo")(session);


dotenv.config();

const PORT = process.env.PORT || 5001;

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
database(); // connect to db
 

// app.use(
//     session({
//         resave: true,
//         saveUninitialized: true,
//         secret: process.env.SESSION_SECRET,
//         cookie: {
//             secure: false, // not using https
//             maxAge: 1209600000,
//         }, // two weeks in milliseconds
//         store: new MongoStore({
//             url: process.env.MONGODB_URI,
//             autoReconnect: true,
//         }),
//     })
// );

app.use(passport.initialize());
app.use(passport.session());



// Bodyparser middleware
app.use(bodyParser.json());
// app.use(cors(corsConfig));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(express.static("public"));


// Routes
app.use(routes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
