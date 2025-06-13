const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const shortUrlSchema = mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      default: () => nanoid(10),
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const urlModel = new mongoose.model("Urlmodel", shortUrlSchema);

module.exports = urlModel;
