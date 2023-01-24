const express = require("express");
const itemsController = require("../controllers/itemsController");
const { validateToken } = require("../utils/auth");

const router = express.Router();

router.get("/continent/:continentId", itemsController.getCategoryItems);
router.get("/country/:countryId", itemsController.getSubCategoryItems);
router.get("/details/:itemId", itemsController.itemDetailsPage);
router.post("/reviews", validateToken, itemsController.postItemReviews);
router.post("/:itemId", validateToken, itemsController.itemOptions);
router.get("/reviews/:itemId", itemsController.getItemReviews);
router.delete("/reviews/:reviewId", validateToken, itemsController.deleteItemReviews);

module.exports = {
  router,
};
