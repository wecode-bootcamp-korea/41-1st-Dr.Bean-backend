const express = require("express");
const itemsControllers = require("../controllers/itemsControllers");

const router = express.Router();

<<<<<<< HEAD
router.get("/continent/:continentId", itemsControllers.getCategoryItems);
=======
router.get("/:continentId", itemsControllers.getCategoryItems);
>>>>>>> main
router.get("/country/:countryId", itemsControllers.getSubCategoryItems);
router.get("/detail/:itemId", itemsControllers.itemDetailsPage);
router.post("/:itemId", itemsControllers.itemOptions);
router.get("/reviews/:itemId", itemsControllers.getItemReviews);

module.exports = {
  router,
};
