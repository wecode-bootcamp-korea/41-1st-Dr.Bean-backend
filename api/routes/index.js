const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const itemsRouter = require("./itemsRouter");
const orderRouter = require("./orderRouter");

router.use("/items", itemsRouter.router);
router.use("/orders", orderRouter.router);
router.use("", userRouter.router);

module.exports = router;
