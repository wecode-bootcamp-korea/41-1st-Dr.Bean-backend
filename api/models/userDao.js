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

const getUserByUsername = async (userId) => {
  return await mysqlDatabase.query(
    `
      SELECT
        *
      FROM users
      WHERE username = ?
      `,
    [userId]
  );
};

module.exports = {
  createUser,
  getUserByUsername,
};
