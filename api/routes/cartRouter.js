const express = require("express");

const cartController = require("../controllers/cartController");

const router = express.Router();

router.get("/cart/:userId", cartController.getCarts);

router.post("/cart", cartController.postCart);

router.delete("/cart/:cartId", cartController.deleteCart);

module.exports = {
  router,
};
