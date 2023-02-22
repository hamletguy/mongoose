const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("the data base is connected ");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
