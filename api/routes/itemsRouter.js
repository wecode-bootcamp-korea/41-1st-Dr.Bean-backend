const express = require("express");
const itemsControllers = require("../controllers/itemsControllers");
const { validateToken } = require("../middleware/auth");

const router = express.Router();

// 메인페이지 대륙 별 상품목록 조회
router.get("/:continentId", itemsControllers.getCategoryItems);
// 카테고리 페이지 나라별 상품목록 조회
router.get("/country/:countryId", itemsControllers.getSubCategoryItems);
// 상세페이지 상품목록 조회
router.get("/detail/:itemId", itemsControllers.itemDetailsPage);
// 상세페이지 옵션보내주
router.post("/:itemId", itemsControllers.itemOptions);
//아이템 리뷰 조회
router.get("/reviews/:itemId", itemsControllers.getItemReviews);

module.exports = {
  router,
};
