const express = require("express");
const router = express.Router();
const userRouter = require("./userRoute");
const marketRoter = require("./marketRoute");

router.use("/user",userRouter);
router.use("/market",marketRoter);

module.exports = router;
