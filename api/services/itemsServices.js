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

const itemOptions = async (size, grind, itemId) => {
  const reuslt = await itemsDao.itemOptions(size, grind, itemId);
  return reuslt;
};

module.exports = {
  getCategoryItems,
  getSubCategoryItems,
  itemDetailsPage,
  itemOptions,
};
