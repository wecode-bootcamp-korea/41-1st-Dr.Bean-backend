const cartService = require("../services/cartService");

const getCarts = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await cartService.getCarts(userId);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const postCart = async (req, res) => {
  try {
    const { quantity, userId, itemId, itemOptionId } = req.body;

    await cartService.postCart(quantity, userId, itemId, itemOptionId);
    return res.status(200).json({ message: "CART_CREATED" });
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
  getCarts,
  postCart,
  deleteCart,
};
