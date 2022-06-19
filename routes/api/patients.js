const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load model
const Patient = require("../../models/Patient");

// @route GET api/patient/test
// @desc Test patients route
// @access Public
router.get("/test", (req, res) => {
  res.json({
    status: 200,
    msg: "Test page",
  });
});

module.exports = router;
