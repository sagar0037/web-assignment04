// db.js
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

//url for mongodb database connection
const url =
  "mongodb+srv://sagarparajuli3030:Sa3030gar@cluster0.luyon9q.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

module.exports = mongoose;
