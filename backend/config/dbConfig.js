const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("Server connect to DB");
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
