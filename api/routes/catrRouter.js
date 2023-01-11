const express = require("express");
const { validateToken } = require("../middleware/auth");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.get("/", validateToken, cartController.getUserCart);
router.post("/", validateToken, cartController.postUserCarts);
router.delete("/:cartId", cartController.deleteCart);

module.exports = {
  router,
};
