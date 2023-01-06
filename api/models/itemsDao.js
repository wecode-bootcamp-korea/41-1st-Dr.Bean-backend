const { mysqlDatabase } = require("./dbconfig");

const getCategoryItems = async (continentId) => {
  try {
    const result = await mysqlDatabase.query(
      `
      SELECT
        name,
        item_img,
        price,
        continent_id as id
      FROM items
      WHERE continent_id = ?
    `,
      [continentId]
    );
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
      `
      SELECT
        c.continent as continent,
        s.country as country,
        s.content as content,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            "name", i.name,
            "img", i.item_img,
            "price", i.price,
            "countryId", i.country_id
          )
        ) as items
      FROM items i
      INNER JOIN categories c ON c.id = i.continent_id
      INNER JOIN sub_categories s ON s.id = i.country_id
      WHERE i.country_id = ?
      GROUP BY s.country,c.continent;
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

const itemDetailsPage = async (itemId) => {
  try {
    const result = await mysqlDatabase.query(
      `
      SELECT
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
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const itemOptions = async (size, grind, itemId) => {
  try {
    return await mysqlDatabase.query(
      `
      INSERT INTO item_options (
        grind_option_id,
        size_option_id,
        item_id
      ) VALUES (?, ?, ?)
      `,
      [grind, size, itemId]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  getCategoryItems,
  getSubCategoryItems,
  itemDetailsPage,
  itemOptions,
};
