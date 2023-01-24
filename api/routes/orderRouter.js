const express = require("express");
const orderControllers = require("../controllers/orderControllers");
const { validateToken } = require("../utils/auth");

const router = express.Router();

router.get("", validateToken, orderControllers.getOrder);
router.post("", validateToken, orderControllers.addressAndItems);

module.exports = {
  router,
};
