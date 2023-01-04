const { mysqlDatabase } = require("./dbconfig");
const bcrypt = require("bcrypt");

const createUser = async (userId, name, password, email, phoneNumber, point) => {
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    await mysqlDatabase.query(
      `INSERT INTO users (
        user_id,
        name,
        password,
        email,
        phone_num,
        point
    ) VALUES (?, ?, ?, ?, ?, ?);
      `,
      [userId, name, hashedPassword, email, phoneNumber, point]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw err;
  }
};

const login = async (userId) => {
  try {
    const [users] = await mysqlDatabase.query(
      `SELECT
        *
      FROM users
      WHERE user_id = ?
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
