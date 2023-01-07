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

module.exports = {
  getOrder,
};
