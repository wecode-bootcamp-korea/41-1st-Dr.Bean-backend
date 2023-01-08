const express = require("express");

const router = express.Router();

const itemsRouter = require("./itemsRouter");

router.use("/items", itemsRouter.router);

module.exports = router;
