const express = require("express");

const router = express.Router();

const itemsRouter = require("./itemsRouter");
const orderRouter = require("./orderRouter");

router.use("/items", itemsRouter.router);
router.use("/order", orderRouter.router);

module.exports = router;
