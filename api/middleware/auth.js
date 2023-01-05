const jwt = require("jsonwebtoken");

require("dotenv").config;

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const jwtVerify = jwt.verify(token, process.env.SECRETKEY);

    req.userId = jwtVerify;
    next();
  } catch (err) {
    console.error(err);
    err.statusCode = 400;
    next(err);
  }
};

module.exports = {
  validateToken,
};
