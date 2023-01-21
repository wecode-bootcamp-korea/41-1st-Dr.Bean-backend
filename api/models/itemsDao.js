const { mysqlDatabase } = require("./dbconfig");

const getCategoryItems = async (continentId) => {
  try {
    const result = await mysqlDatabase.query(
      `
      SELECT
        items.id,
        name,
        item_img,
        price
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
        c.id as id,
        c.continent as continent,
        c.english_continent,
        s.country as country,
        s.english_country,
        s.content as content,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            "id", i.id,
            "name", i.name,
            "img", i.item_img,
            "price", i.price
          )
        ) as items
      FROM items i
      INNER JOIN categories c ON c.id = i.continent_id
      INNER JOIN sub_categories s ON s.id = i.country_id
      WHERE i.country_id = ?
      GROUP BY s.country, c.continent, c.id;
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
    const [result] = await mysqlDatabase.query(
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

const getItemReviews = async (itemId, offset, limit) => {
  console.log(itemId, offset, limit);
  try {
    const result = await mysqlDatabase.query(
      `
      SELECT
        id,
        user_name,
        review_title,
        review_details,
        review_image,
        rates
      FROM reviews 
      WHERE item_id = ?
      LIMIT ?, ?
      `,
      [itemId, offset, limit]
    );
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const itemOptions = async (quantity, size, grind, itemId) => {
  try {
    await mysqlDatabase.query(
      `
      INSERT INTO item_options (
        quantity,
        size_option_id,
        grind_option_id,
        item_id
      ) VALUES (?, ?, ?, ?)
      `,
      [quantity, size, grind, itemId]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const postItemReviews = async (reviewTitle, reviewDetails, reviewImage, rates, userId, itemId) => {
  try {
    await mysqlDatabase.query(
      `
      INSERT INTO reviews (
        review_title,
        review_details,
        review_image,
        rates,
        user_id,
        item_id
      ) VALUES ( ?, ?, ?, ?, ?, ? )
        `,
      [reviewTitle, reviewDetails, reviewImage, rates, userId, itemId]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    err.statusCode = 500;
    throw error;
  }
};

const deleteItemReviews = async (reviewId) => {
  try {
    return await mysqlDatabase.query(
      `
      DELETE FROM
        reviews
      WHERE id = ?
      `,
      [reviewId]
    );
  } catch {
    const error = new Error("INVALID_DATA_INPUT");
    error.mysqlDatabase = 500;
    throw error;
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
