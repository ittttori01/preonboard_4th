const express = require("express");
const router = express.Router();
const userRouter = require("./userRoute");
const marketRouter = require("./marketRoute");
const productRouter = require("./productRoute");

router.use("/user",userRouter);
router.use("/market",marketRouter);
router.use("/product",productRouter);

module.exports = router;
