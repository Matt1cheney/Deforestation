require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const data_routes = require("./routes/api-database.js");
const mongoURI = "mongodb+srv://reforestration:reforestration@cluster0-f774a.mongodb.net/test?retryWrites=true&w=majority";
const app = express();
const PORT = process.env.PORT || 4000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// serve build files
jsDirectory = process.env.NODE_ENV === 'production' ? 'build' : 'dist';
app.use(express.static("client"));
app.use(express.static(jsDirectory));

// Add routes, both API and view
app.use(data_routes);

// // Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
