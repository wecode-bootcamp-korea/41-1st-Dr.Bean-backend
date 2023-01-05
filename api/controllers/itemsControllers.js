const itemsServices = require("../services/itemsServices");

const getCategoryItems = async (req, res) => {
  try {
    const { continentId } = req.params;
    const result = await itemsServices.getCategoryItems(continentId);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getSubCategoryItems = async (req, res) => {
  try {
    const { countryId } = req.params;
    const result = await itemsServices.getSubCategoryItems(countryId);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const itemDetailsPage = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { size, grind } = req.body;
    console.log(size);
    console.log(grind);

    if (!size || !grind) {
      return res.status(400).json({ message: "BUTTON_ERROR" });
    }
    const result = await itemsServices.itemDetailsPage(itemId, size, grind);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getCategoryItems,
  getSubCategoryItems,
  itemDetailsPage,
};
