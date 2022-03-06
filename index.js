const env = require("dotenv").config();
const express = require("express");



const db = require("./db");

//routes imports
const userRoute=require('./routes/userRoute');

const app = express();
app.use(express.json());

let port = process.env.PORT || 5000;

(() => {
  db();

  // get information at "/" url
  app.get("/", (req, res) =>
    res.status(200).send("Server is running successfully")
  );

  app.use("/user/",userRoute)

  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
})();
