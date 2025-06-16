const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/dbConfig");
const shortUrl = require("./Routes/shortUrl");
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api", shortUrl);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
