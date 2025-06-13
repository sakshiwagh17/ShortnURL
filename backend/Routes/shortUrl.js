const express = require("express");
const {
  createUrl,
  getallurl,
  deleteurl,
  geturl,
} = require("../controllers/shorturl");
const router = express.Router();
router.post("/shorturl", createUrl);
router.get("/shorturl", getallurl);
router.get("/shorturl/:id", geturl);
router.delete("/shorturl/:id", deleteurl);

module.exports = router;
