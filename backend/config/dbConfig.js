const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log("Server connect to DB");
  } catch (error) {
    console.log("connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
