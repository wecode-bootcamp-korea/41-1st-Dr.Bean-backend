const userService = require("../services/userService");

const signup = async (req, res) => {
  try {
    const { userId, name, password, email, phoneNumber, point } = req.body;

    if (!userId || !name || !password || !email || !phoneNumber || !point) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await userService.signUp(userId, name, password, email, phoneNumber, point);
    return res.status(200).json({ message: "SIGNUP_SUCCESS" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const signin = async (req, res) => {
  try {
    const { userId, password } = req.body;

    if (!userId || !password) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    const { jwtToken, checkHash } = await userService.signIn(userId, password);

    if (!checkHash) {
      res.status(401).json({ message: "PASSWORD_IS_DIFFERENT" });
    }
    return res.status(200).json({ message: jwtToken });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  signup,
  signin,
};
