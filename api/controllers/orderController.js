const orderService = require("../services/orderService");
const { catchAsync } = require("../utils/error");

const getOrder = catchAsync(async (req, res) => {
  const result = await orderService.getOrder(req.userId);
  return res.status(200).json(result);
});

const addressAndItems = catchAsync(async (req, res) => {
  const { zipCode, address, reAddress, message, size, grind, itemId } = req.body;

  if (!zipCode || !address || !reAddress || address !== reAddress) {
    return res.status(400).json({ message: "ADDRESS_ERROR" });
  }

  await orderService.addressAndItems(zipCode, address, reAddress, message, size, grind, itemId, req.userId);
  return res.status(200).json({ message: "Shipping address registration complete" });
});

module.exports = {
  getOrder,
  addressAndItems,
};
