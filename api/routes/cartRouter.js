const express = require("express");
const { validateToken } = require("../utils/auth");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.get("/", validateToken, cartController.getUserCart);
router.post("/", validateToken, cartController.postUserCart);
router.delete("/:cartId", validateToken, cartController.deleteCart);

module.exports = {
  router,
};
