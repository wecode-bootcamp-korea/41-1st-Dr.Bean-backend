const itemsDao = require("../models/itemsDao");

const getCategoryItems = async (continentId) => {
  const result = await itemsDao.getCategoryItems(continentId);
  return result;
};

const getSubCategoryItems = async (countryId) => {
  const result = await itemsDao.getSubCategoryItems(countryId);
  return result;
};

const itemDetailsPage = async (itemId) => {
  const result = await itemsDao.itemDetailsPage(itemId);
  return result;
};

const getItemReviews = async (itemId, offset, limit) => {
  const result = await itemsDao.getItemReviews(itemId, offset, limit);
  return result;
};

const itemOptions = async (quantity, size, grind, itemId) => {
  const reuslt = await itemsDao.itemOptions(quantity, size, grind, itemId);
  return reuslt;
};

const postItemReviews = async (reviewTitle, reviewDetails, reviewImage, rates, userId, itemId) => {
  const result = await itemsDao.postItemReviews(reviewTitle, reviewDetails, reviewImage, rates, userId, itemId);
  return result;
};

const deleteItemReviews = async (reviewId) => {
  return await itemsDao.deleteItemReviews(reviewId);
};
module.exports = {
  getCategoryItems,
  getSubCategoryItems,
  itemDetailsPage,
  itemOptions,
  getItemReviews,
  postItemReviews,
  deleteItemReviews,
};
