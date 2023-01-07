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

module.exports = {
  getOrder,
};
