const mongoose = require("mongoose");
// const { MongoClient, ObjectID } = require('mongodb');
require("dotenv").config();
// console.log(require("dotenv").config());

// const dotenv = require("dotenv");
// dotenv.config();

// const { DB_URI, DB_NAME, JWT_SECERT } = process.env;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:28015", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false, //check version 5.9.7 to see if works with that
});

module.exports = mongoose.connection;
