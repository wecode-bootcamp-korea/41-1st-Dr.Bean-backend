const { mysqlDatabase } = require("./dbconfig");

const getUserCart = async (userId) => {
  return await mysqlDatabase.query(
    `
      SELECT
        c.id as cart_id,
        u.id as user_id,
        c.quantity,
        i.name,
        i.item_img,
        i.price,
        go.grind,
        so.grams,
        so.option_price
      FROM carts c
      INNER JOIN users u           ON c.user_id = u.id
      INNER JOIN items i           ON c.item_id = i.id
      INNER JOIN item_options io   ON io.id     = c.item_option_id
      INNER JOIN grind_options go  ON go.id     = io.grind_option_id
      INNER JOIN size_options so   ON so.id     = io.size_option_id
      WHERE u.id = ?
      ORDER BY c.id 
      `,
    [userId]
  );
};

const postUserCart = async (userId, itemId, size, grind, quantity) => {
  const [itemOptions] = await mysqlDatabase.query(
    `
      SELECT
        id
      FROM item_options
      WHERE size_option_id = ? AND grind_option_id = ? AND item_id = ?
      `,
    [size, grind, itemId]
  );
  return await mysqlDatabase.query(
    `
      INSERT INTO carts(
        quantity,
        item_id,
        item_option_id,
        user_id
      ) VALUES (?, ?, ?, ?);
      `,
    [quantity, itemId, itemOptions.id, userId]
  );
};

const deleteCart = async (cartId, userId) => {
  return await mysqlDatabase.query(
    `
      DELETE FROM
        carts
      WHERE id = ? AND user_id = ? 
      `,
    [cartId, userId]
  );
};

module.exports = {
  getUserCart,
  postUserCart,
  deleteCart,
};
