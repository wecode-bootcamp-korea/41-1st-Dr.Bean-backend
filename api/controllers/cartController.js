const cartService = require("../services/cartService");
const { catchAsync } = require("../utils/error");

const getUserCart = catchAsync(async (req, res) => {
  const result = await cartService.getUserCart(req.userId);
  return res.status(200).json(result);
});

const postUserCart = catchAsync(async (req, res) => {
  const { itemId, size, grind, quantity } = req.body;
  await cartService.postUserCart(req.userId, itemId, size, grind, quantity);
  return res.status(200).json({ message: "CART_LIST_CREATED" });
});

const deleteCart = catchAsync(async (req, res) => {
  const { cartId } = req.params;
  await cartService.deleteCart(cartId, req.userId);
  return res.status(200).json({ message: "CART_LIST_DELETED" });
});

module.exports = {
  getUserCart,
  postUserCart,
  deleteCart,
};
