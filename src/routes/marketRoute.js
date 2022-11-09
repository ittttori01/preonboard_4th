const express = require("express");
const router = express.Router();

const marketController = require("../controllers/marketController");
router.post("/register",marketController.registerMarket);

module.exports = router;