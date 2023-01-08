const oredrDao = require("../models/orderDao");

const getOrder = async (userId) => {
  const result = await oredrDao.getOrder(userId);
  return result;
};
module.exports = {
  getOrder,
};
