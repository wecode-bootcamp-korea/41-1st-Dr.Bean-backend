const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userDao = require("../models/userDao");
const { passwordValidationCheck } = require("../utils/validation-check");

const signUp = async (userId, name, password, email, phoneNumber, point) => {
  await passwordValidationCheck(password);

  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return userDao.createUser(userId, name, hashedPassword, email, phoneNumber, point);
};

const getUserByUsername = async (userId, password) => {
  const [userData] = await userDao.getUserByUsername(userId);

  if (!userData) throw new Error("INVALID_INPUT_DATA");

  const checkHash = await bcrypt.compare(password, userData.password);

  if (!checkHash) throw new Error("INVALID_INPUT_DATA");

  const jwtToken = jwt.sign(userData.id, process.env.SECRETKEY);

  return { jwtToken };
};

module.exports = {
  signUp,
  getUserByUsername,
};
