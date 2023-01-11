const jwt = require("jsonwebtoken");

require("dotenv").config;

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const jwtVerify = jwt.verify(token, "drBeanProject");

    userId = jwtVerify;
    next();
  } catch (err) {
    console.error(err);
    response.status(401).json({ message: "Invalid Access Token" });
    next(err);
  }
};

module.exports = {
  validateToken,
};
