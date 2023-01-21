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
    const result = await itemsServices.itemDetailsPage(itemId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getItemReviews = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { offset, limit } = req.query;
    const result = await itemsServices.getItemReviews(itemId, parseInt(offset), parseInt(limit));
    return res.status(200).json(result);
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const itemOptions = async (req, res) => {
  try {
    const { quantity, size, grind, itemId } = req.body;

    if (!size || !grind) {
      return res.status(400).json({ message: "BUTTON_ERROR" });
    }

    await itemsServices.itemOptions(quantity, size, grind, itemId);
    return res.status(200).json({ message: "OPTIONS_SELECT!" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const postItemReviews = async (req, res) => {
  try {
    const { reviewTitle, reviewDetails, reviewImage, rates, itemId } = req.body;
    await itemsServices.postItemReviews(reviewTitle, reviewDetails, reviewImage, rates, req.userId, itemId);
    return res.status(200).json({ message: "REVIEW_CREATED!" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const deleteItemReviews = async (req, res) => {
  try {
    const { reviewId } = req.params;
    await itemsServices.deleteItemReviews(reviewId);
    return res.status(200).json({ message: "REVIEW_DELETED" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getCategoryItems,
  getSubCategoryItems,
  itemDetailsPage,
  itemOptions,
  getItemReviews,
  postItemReviews,
  deleteItemReviews,
};
