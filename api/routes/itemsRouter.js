const express = require("express");
const itemsControllers = require("../controllers/itemsControllers");
const { validateToken } = require("../middleware/auth");

const router = express.Router();

router.get("/:continentId", itemsControllers.getCategoryItems);
router.get("/country/:countryId", itemsControllers.getSubCategoryItems);
router.get("/detail/:itemId", itemsControllers.itemDetailsPage);
router.post("/:itemId", itemsControllers.itemOptions);

module.exports = {
  router,
};
