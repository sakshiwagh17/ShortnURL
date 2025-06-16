const express = require("express");
const urlModel = require("../models/shorturl");

const createUrl = async (req, res) => {
  try {
    const { fullUrl } = req.body;
    console.log(fullUrl);
    const urlFound = await urlModel.findOne({ fullUrl });
    if (urlFound) {
      res.status(409).json({ message: "Url already found", fullUrl });
    } else {
      const shorturl = await urlModel.create({ fullUrl });
      res.status(201).json({ shorturl });
    }
  } catch (error) {
    res.json({ message: "Something went wrong", error });
  }
};

const getallurl = async (req, res) => {
  try {
    const shortUrls = await urlModel.find().sort({ created: -1 });
    if (shortUrls.length < 0) {
      res.send({ message: "Url not found!" });
    } else {
      res.send(shortUrls);
    }
  } catch (error) {
    res.json({ message: "Something went worng", error });
  }
};

const geturl = async (req, res) => {
  try {
    const shorturl = req.params.fullUrl;
    const shortUrl = await urlModel.findOne({ shorturl });
    if (!shortUrl) {
      res.json({ message: "No URL found!" });
    } else {
      shortUrl.clicks++;
      await shortUrl.save();
      res.redirect(shortUrl.fullUrl);
    }
  } catch (error) {
    res.json({ message: "Something went worng", error });
  }
};

const deleteurl = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const shortUrl = await urlModel.findByIdAndDelete(id);
    console.log(shortUrl);
    if (shortUrl) {
      res.send({ message: "Requested url deleteded sussessfully!" });
    } else {
      res.send({ message: "No url deleted!" });
    }
  } catch (error) {
    res.json({ message: "Something went worng", error });
  }
};

module.exports = { createUrl, getallurl, deleteurl, geturl };
