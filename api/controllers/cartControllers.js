const cartServices = require("../services/cartServices");

const getUserCart = async (req, res) => {
  try {
    const result = await cartServices.getUserCart(req.userId);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const postUserCarts = async (req, res) => {
  try {
    const { itemId, size, grind, quantity } = req.body;
    await cartServices.postUserCarts(req.userId, itemId, size, grind, quantity);
    return res.status(200).json({ message: "CART_LIST_CREATED" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { cartId } = req.params;
    await cartServices.deleteCart(cartId, req.userId);
    return res.status(200).json({ message: "CART_LIST_DELETED" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getUserCart,
  postUserCarts,
  deleteCart,
};
