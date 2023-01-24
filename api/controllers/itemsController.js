const itemsService = require("../services/itemsService");
const { catchAsync } = require("../utils/error");

const getCategoryItems = catchAsync(async (req, res) => {
  const { continentId } = req.params;
  const result = await itemsService.getCategoryItems(continentId);
  return res.status(200).json(result);
});

const getSubCategoryItems = catchAsync(async (req, res) => {
  const { countryId } = req.params;
  const result = await itemsService.getSubCategoryItems(countryId);
  return res.status(200).json(result);
});

const itemDetailsPage = catchAsync(async (req, res) => {
  const { itemId } = req.params;
  const result = await itemsService.itemDetailsPage(itemId);
  return res.status(200).json(result);
});

const getItemReviews = catchAsync(async (req, res) => {
  const { itemId } = req.params;
  const { offset, limit } = req.query;
  const result = await itemsService.getItemReviews(itemId, parseInt(offset), parseInt(limit));
  return res.status(200).json(result);
});

const itemOptions = catchAsync(async (req, res) => {
  const { quantity, size, grind, itemId } = req.body;

  if (!size || !grind) {
    const err = new Error("BUTTON_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await itemsService.itemOptions(quantity, size, grind, itemId);
  return res.status(200).json({ message: "OPTIONS_SELECTED!" });
});

const postItemReviews = catchAsync(async (req, res) => {
  const { reviewTitle, reviewDetails, reviewImage, rates, itemId } = req.body;
  await itemsService.postItemReviews(reviewTitle, reviewDetails, reviewImage, rates, req.userId, itemId);
  return res.status(200).json({ message: "REVIEW_CREATED!" });
});

const deleteItemReviews = catchAsync(async (req, res) => {
  const { reviewId } = req.params;
  await itemsService.deleteItemReviews(reviewId, req.userId);
  return res.status(200).json({ message: "REVIEW_DELETED" });
});

module.exports = {
  getCategoryItems,
  getSubCategoryItems,
  itemDetailsPage,
  itemOptions,
  getItemReviews,
  postItemReviews,
  deleteItemReviews,
};
