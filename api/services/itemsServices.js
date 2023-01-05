const itemsDao = require("../models/itemsDao");

const getCategoryItems = async (continentId) => {
  const result = await itemsDao.getCategoryItems(continentId);
  return result;
};

const getSubCategoryItems = async (countryId) => {
  const result = await itemsDao.getSubCategoryItems(countryId);
  return result;
};

const itemDetailsPage = async (itmeId, size, grind) => {
  const result = await itemsDao.itemDetailsPage(itmeId, size, grind);
  return result;
};

module.exports = {
  getCategoryItems,
  getSubCategoryItems,
  itemDetailsPage,
};
