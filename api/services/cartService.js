const cartDao = require("../models/cartDao");

const getUserCart = async (userId) => {
  const result = await cartDao.getUserCart(userId);
  return result;
};

const postUserCart = async (userId, itemId, size, grind, quantity) => {
  return await cartDao.postUserCart(userId, itemId, size, grind, quantity);
};

const deleteCart = async (cartId, userId) => {
  return await cartDao.deleteCart(cartId, userId);
};
module.exports = {
  getUserCart,
  postUserCart,
  deleteCart,
};
