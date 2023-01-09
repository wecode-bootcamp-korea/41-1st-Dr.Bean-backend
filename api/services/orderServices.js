const oredrDao = require("../models/orderDao");

const getOrder = async (userId) => {
  const result = await oredrDao.getOrder(userId);
  return result;
};

const addressAndItems = async (zipCode, address, reAddress, message, size, grind, itemId) => {
  const result = await oredrDao.addressAndItems(zipCode, address, reAddress, message, size, grind, itemId);
  return result;
};
module.exports = {
  getOrder,
  addressAndItems,
};
