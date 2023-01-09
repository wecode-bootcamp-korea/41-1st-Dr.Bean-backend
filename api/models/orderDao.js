const { mysqlDatabase } = require("./dbconfig");

const getOrder = async (userId) => {
  try {
    const result = await mysqlDatabase.query(
      `
      SELECT
        name,
        phone_num,
        email,
        point
      FROM users
      WHERE id = ?
      `,
      [userId]
    );
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const addressAndItems = async (zipCode, address, reAddress, message, size, grind, itemId) => {
  try {
    await mysqlDatabase.query(
      `
      INSERT INTO users_address (
        zip_code,
        address,
        remaining_address,
        delivery_message
      ) VALUES (?, ?, ?, ?)
      `,
      [zipCode, address, reAddress, message]
    );
    await mysqlDatabase.query(
      `
      INSERT INTO itemrs_options (
        size_option_id,
        grind_option_id,
        item_id
      ) VALUES(?, ?, ?)
      `,
      [size, grind, itemId]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  getOrder,
  addressAndItems,
};
