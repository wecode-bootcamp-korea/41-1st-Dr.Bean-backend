const express = require("express");
const orderControllers = require("../controllers/orderControllers");
const { validateToken } = require("../middleware/auth");

const router = express.Router();

router.get("", validateToken, orderControllers.getOrder);
router.post("", orderControllers.addressAndItems);

module.exports = {
  router,
};
