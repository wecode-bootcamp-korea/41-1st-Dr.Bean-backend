const { mysqlDatabase } = require("./dbconfig");

const getCategoryItems = async (continentId) => {
  return await mysqlDatabase.query(
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
};

const getSubCategoryItems = async (countryId) => {
  return await mysqlDatabase.query(
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
};

const itemDetailsPage = async (itemId) => {
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
};

const getItemReviews = async (itemId, offset, limit) => {
  return await mysqlDatabase.query(
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
      ORDER BY reviews.id DESC
      LIMIT ?, ?
    `,
    [itemId, offset, limit]
  );
};

const itemOptions = async (quantity, size, grind, itemId) => {
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
};

const postItemReviews = async (reviewTitle, reviewDetails, reviewImage, rates, userId, itemId) => {
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
};

const deleteItemReviews = async (reviewId, userId) => {
  await mysqlDatabase.query(
    `
      DELETE FROM
        reviews
      WHERE id = ? AND user_id = ?
    `,
    [reviewId, userId]
  );
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
