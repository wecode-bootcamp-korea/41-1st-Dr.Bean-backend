const { mysqlDatabase } = require("./dbconfig");

const getUserCarts = async (userId) => {
  console.log("cartService_userId???????????????????????????????", userId);
  try {
    const result = await mysqlDatabase.query(
      `
      SELECT
        u.id,
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
      `,
      [userId]
    );

    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw err;
  }
};

const postCart = async (quantity, itemId, itemOptionId) => {
  console.log("cartDao_postcart_userId????????????????????????", userId);
  try {
    return await mysqlDatabase.query(
      `
      INSERT INTO carts(
        quantity,
        user_id,
        item_id,
        item_option_id
      ) VALUES (?, ?, ?, ?);
      `,
      [quantity, userId, itemId, itemOptionId]
    );
  } catch {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const deleteCart = async (cartId) => {
  try {
    return await mysqlDatabase.query(
      `
      DELETE FROM
        carts
      WHERE id = ?
      `,
      [cartId]
    );
  } catch {
    const error = new Error("INVALID_DATA_INPUT");
    error.mysqlDatabase = 500;
    throw error;
  }
};

module.exports = {
  getUserCarts,
  postCart,
  deleteCart,
};
