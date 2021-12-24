const User = require('../models/userModel');
const validator = require("validator");

class SignupController {
  index(req, res) {
    res.render("signup", {
      layout: "blank-layout",
      path: req.originalUrl.split("?").shift(),
    });
  }

  validateUsername(username, password, mobilephone, usertype) {
    return (
      validator.isAlphanumeric(username) &&
      validator.isStrongPassword(password, {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
      }) &&
      validator.isMobilePhone(mobilephone, " vi-VN") &&
      validator.isIn(usertype, ["student", "teacher"]) &&
      validator.isLength(username, { min: 6, max: 32 }) &&
      validator.isLength(username, { min: 6, max: 32 })
    );
  }

  async signup(req, res) {
    let username = req.body.user;
    let password = req.body.password;
    let mobilephone = req.body.mobilephone;
    let usertype = req.body.usertype;

    if (!username || !password || !mobilephone) return false;
    if (!validateUsername(username, password, mobilephone, usertype))
      return false;

    try {
      let user = await User.find({
        $or: [{ username: username }, { mobilephone: mobilephone }],
      });
    } catch (error) {
      console.error(e, e.stack);
      return false;
    }

    if (user.length != 0) return false;

    password = await bcrypt.hash(password, saltRounds);

    try {
      let user = await User.create({
        username: username,
        password: password,
        mobilephone: mobilephone,
        usertype: usertype,
        remainningBalance: 0,
      });
    } catch (error) {
      console.error(e, e.stack);
      return false;
    }
    return true;
  }
}

module.exports = new SignupController();