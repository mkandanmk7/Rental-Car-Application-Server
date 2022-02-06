const env = require("dotenv").config();
const express = require("express");

const db = require("./db");

const app = express();
app.use(express.json());

let port = process.env.PORT;

(() => {
  db();

  // get information at "/" url
  app.get("/", (req, res) =>
    res.status(200).send("Server is running successfully")
  );

  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
})();
