const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.post("/singup", userController.signup);

router.post("/signin", userController.signin);

module.exports = {
  router,
};
