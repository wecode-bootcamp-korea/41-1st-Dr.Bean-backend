const express = require("express");
const orderControllers = require("../controllers/orderControllers");
const { validateToken } = require("../utils/auth");

const router = express.Router();

router.get("", validateToken, orderControllers.getOrders);
router.post("", validateToken, orderControllers.createOrderItems);

module.exports = {
  router,
};
