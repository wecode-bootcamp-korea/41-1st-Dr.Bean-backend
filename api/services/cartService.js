const cartDao = require("../models/cartDao");

const getUserCarts = async (userId) => {
  const result = await cartDao.getUserCarts(userId);
  return result;
};

const postCart = async (quantity, itemId, itemOptionId) => {
  return await cartDao.postCart(quantity, itemId, itemOptionId);
};

const deleteCart = async (cartId) => {
  return await cartDao.deleteCart(cartId);
};
module.exports = {
  getUserCarts,
  postCart,
  deleteCart,
};
