const cartService = require("../services/cartService");

const getUserCarts = async (req, res) => {
  try {
    const result = await cartService.getUserCarts(userId);

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const postCart = async (req, res) => {
  try {
    const { quantity, itemId, itemOptionId } = req.body;

    await cartService.postCart(quantity, itemId, itemOptionId);
    return res.status(200).json({ message: "CART_LIST_CREATED" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { cartId } = req.params;

    await cartService.deleteCart(cartId);
    return res.status(200).json({ message: "CART_LIST_DELETED" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getUserCarts,
  postCart,
  deleteCart,
};