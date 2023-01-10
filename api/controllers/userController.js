const userService = require("../services/userService");
const { catchAsync } = require("../utils/error")

//controller 별로 모두 globalErrorHandler 적용되도록 수정

const signup = catchAsync(async (req, res) => {
    const { userId, name, password, email, phoneNumber, point } = req.body;

    if (!userId || !name || !password || !email || !phoneNumber || !point) {
      const err = new Error("KEY_ERROR")
      err.statusCode = 400
      throw err
    }

    await userService.signUp(userId, name, password, email, phoneNumber, point);
    return res.status(200).json({ message: "SIGNUP_SUCCESS" });
});

const signin = async (req, res) => {
  try {
    // userId가 아닌 다른 변수명으로!
    const { userId, password } = req.body;

    //error를 throw 하게끔
    if (!userId || !password) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    const jwtToken = await userService.signIn(userId, password);

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
