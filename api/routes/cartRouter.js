const express = require("express");
const { validateToken } = require("../utils/auth");
const cartControllers = require("../controllers/cartControllers");
const router = express.Router();

router.get("/", validateToken, cartController.getUserCart);
router.post("/", validateToken, cartController.postUserCarts);
router.delete("/:cartId", validateToken, cartController.deleteCart);

module.exports = {
  router,
};
