const userService = require("../services/userService");
const { catchAsync } = require("../utils/error");

const signup = catchAsync(async (req, res) => {
  const { userId, name, password, email, phoneNumber, point } = req.body;

  if (!userId || !name || !password || !email || !phoneNumber || !point) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await userService.signUp(userId, name, password, email, phoneNumber, point);
  return res.status(200).json({ message: "SIGNUP_SUCCESS" });
});

const getUserByUsername = catchAsync(async (req, res) => {
  const { userId, password } = req.body;

  if (!userId || !password) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  const { jwtToken } = await userService.getUserByUsername(userId, password);
  return res.status(200).json({ accessToken: jwtToken });
});

module.exports = {
  signup,
  getUserByUsername,
};
