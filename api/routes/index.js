const express = require("express");

const router = express.Router();

const cartRouter = require("./cartRouter");

router.use("", cartRouter.router);

module.exports = router;
