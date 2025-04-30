const express = require("express");
const router = express.Router();
const bloodTestController = require("../controllers/bloodTestController");

router.post("/analyze", bloodTestController.analyzeBloodTest);  // no change needed unless adding more routes

module.exports = router;
