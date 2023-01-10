const { mysqlDatabase } = require("./dbconfig");

const createUser = async (userId, name, hashedPassword, email, phoneNumber, point) => {
    return mysqlDatabase.query(
      `
      INSERT INTO users (
        username,
        name,
        password,
        email,
        phone_num,
        point
    ) VALUES (?, ?, ?, ?, ?, ?);
      `,
      [userId, name, hashedPassword, email, phoneNumber, point]
    );
};

const getUserByNickname = async (userId) => {
  try {
    const [users] = await mysqlDatabase.query(
      `
      SELECT
        *
      FROM users
      WHERE username = ?
      `,
      [userId]
    );
    return users;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  createUser,
  login,
};
