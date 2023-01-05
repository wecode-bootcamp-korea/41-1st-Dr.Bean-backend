const { mysqlDatabase } = require("./dbconfig");

const getCategoryItems = async (continentId) => {
  try {
    const result = await mysqlDatabase.query(
      `SELECT
        name,
        item_img,
        price,
        continent_id as id
      FROM items
      WHERE continent_id = ?
    `,
      [continentId]
    );
    console.log(result);
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const getSubCategoryItems = async (countryId) => {
  try {
    const result = await mysqlDatabase.query(
      `SELECT
        name,
        item_img,
        price,
        country_id as id
      FROM items
      WHERE country_id = ?
      `,
      [countryId]
    );
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const itemDetailsPage = async (itemId, size, grind) => {
  try {
    console.log(1);
    await mysqlDatabase.query(
      `INSERT INTO item_options (
        grind_option_id,
        size_option_id,
        item_id
      ) VALUES (?, ?, ?)
      `,
      [grind, size, itemId]
    );
    console.log(2);
    const result = await mysqlDatabase.query(
      `SELECT
        id,
        name,
        description,
        price,
        item_img
      FROM items
      WHERE items.id = ?
      `,
      [itemId]
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  getCategoryItems,
  getSubCategoryItems,
  itemDetailsPage,
};
