const express = require("express");
const orderControllers = require("../controllers/orderControllers");
const { validateToken } = require("../middleware/auth");

const router = express.Router();

router.get("", validateToken, orderControllers.getOrder);

module.exports = {
  router,
};
