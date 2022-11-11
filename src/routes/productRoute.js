const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
router.post("/register",productController.registerProduct);
router.get("/:product_id",productController.getProduct);
router.delete("/delete" , productController.deleteProduct);
router.put("/update",productController.updateProduct);

module.exports = router;