const orderServices = require("../services/orderServices");

const getOrder = async (req, res) => {
  try {
    const result = await orderServices.getOrder(req.userId);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const addressAndItems = async (req, res) => {
  try {
    const { zipCode, address, reAddress, message, size, grind, itemId } = req.body;
    console.log(zipCode, address, reAddress, message, size, grind, itemId);

    if (!zipCode || !address || !reAddress) {
      return res.status(400).json({ message: "ADDRESS_ERROR" });
    }

    await orderServices.addressAndItems(zipCode, address, reAddress, message, size, grind, itemId, req.userId);
    return res.status(200).json({ message: "Shipping address registration complete" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getOrder,
  addressAndItems,
};
