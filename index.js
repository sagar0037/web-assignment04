// index.js
const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./mongodb");
const apiRouter = require("./api");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", apiRouter);

// to run the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
