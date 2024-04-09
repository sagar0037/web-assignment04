// db.js
const mongoose = require("mongoose");

// url for mongodb database connection
const url =
  "mongodb+srv://sagarparajuli3030:Sa3030gar@cluster0.luyon9q.mongodb.net/shop?retryWrites=true&w=majority";

// building mongodb connection
mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

module.exports = mongoose;
