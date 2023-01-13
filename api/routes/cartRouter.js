const express = require("express");
const { validateToken } = require("../middleware/auth");
const cartControllers = require("../controllers/cartControllers");
const router = express.Router();

router.get("/", validateToken, cartControllers.getUserCart);
router.post("/", validateToken, cartControllers.postUserCarts);
router.delete("/:cartId", validateToken, cartControllers.deleteCart);

module.exports = {
  router,
};
