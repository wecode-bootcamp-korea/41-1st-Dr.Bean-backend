const userDao = require("../models/userDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (userId, name, password, email, phoneNumber, point) => {
  const pwValidation = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})");

  if (!pwValidation.test(password) && !nameValidation.test(name)) {
    const err = new Error("PASSWORD_IS_NOT_VALID");
    err.statusCode = 409;
    throw err;
  }

  const createUser = await userDao.createUser(userId, name, password, email, phoneNumber, point);
  return createUser;
};

const signIn = async (userId, password) => {
  const userData = await userDao.login(userId);
  const jwtToken = jwt.sign(userData.id, process.env.SECRETKEY);
  const checkHash = await bcrypt.compare(password, userData.password);
  return { jwtToken, checkHash };
};

module.exports = {
  signUp,
  signIn,
};
