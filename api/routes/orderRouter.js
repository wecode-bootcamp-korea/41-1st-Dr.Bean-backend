const express = require("express");
const orderController = require("../controllers/orderController");
const { validateToken } = require("../utils/auth");

const router = express.Router();

router.get("", validateToken, orderController.getOrder);
router.post("", validateToken, orderController.addressAndItems);

module.exports = {
  router,
};
