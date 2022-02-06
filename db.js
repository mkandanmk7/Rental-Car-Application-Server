const mongoose = require("mongoose");
let DB_URL = process.env.DB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB connection successfully :", DB_URL);
  } catch (err) {
    console.log("error in db connection", err);
  }
};

module.exports = connectDB;
