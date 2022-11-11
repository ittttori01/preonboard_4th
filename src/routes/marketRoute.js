const express = require("express");
const router = express.Router();

const marketController = require("../controllers/marketController");
router.post("/register",marketController.registerMarket);
router.get("/products/:market_id",marketController.getMarketProducts);

module.exports = router;