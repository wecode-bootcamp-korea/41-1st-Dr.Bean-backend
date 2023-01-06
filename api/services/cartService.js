const cartDao = require("../models/cartDao");

const getCarts = async (userId) => {
  const result = await cartDao.getCarts(userId);
  return result;
};

const postCart = async (quantity, userId, itemId, itemOptionId) => {
  return await cartDao.postCart(quantity, userId, itemId, itemOptionId);
};

const deleteCart = async (cartId) => {
  return await cartDao.deleteCart(cartId);
};
module.exports = {
  getCarts,
  postCart,
  deleteCart,
};
