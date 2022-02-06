const express = require("express");

const app = express();

let port = process.env.PORT || 5000;

(() => {
  // get information at "/" url
  app.get("/", (req, res) =>
    res.status(200).send("Server is running successfully")
  );

  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
})();
