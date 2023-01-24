const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const itemsRouter = require("./itemsRouter");
const orderRouter = require("./orderRouter");
const cartRouter = require("./cartRouter");

router.use("/items", itemsRouter.router);
router.use("/order", orderRouter.router);
router.use("", userRouter.router);
router.use("/cart", cartRouter.router);

module.exports = router;
