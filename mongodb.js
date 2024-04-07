// db.js
const mongoose = require("mongoose");

//url for mongodb database connection
const url =
  "mongodb+srv://sagarparajuli3030:Sa3030gar@cluster0.luyon9q.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,
});

// Modify the Mongoose connection options
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
});

// Connecting to the server
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Mongodb Connected");
  } catch (error) {
    console.error("Error in MongoDB connection", error);
  }
}

module.exports = mongoose;
