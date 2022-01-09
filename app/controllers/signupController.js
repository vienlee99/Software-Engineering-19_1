const User = require("../models/userModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = require("../../app/config/security.config").saltRounds;

class SignupController {
  index(req, res, msg) {
    res.render("signup", {
      layout: "blank-layout",
      path: req.originalUrl.split("?").shift(),
      msg: msg,
    });
    this.count += 1;
    console.log(this.count);
  }

  validateUsername(username, password, mobilephone, usertype) {
    return (
      validator.isAlphanumeric(username) &&
      /^((84|0[3|5|7|8|9])+([0-9]{8}))$/.test(mobilephone) &&
      validator.isIn(usertype, [ 1, 2]) &&
      validator.isLength(username, { min: 4, max: 32 }) &&
      validator.isLength(password, { min: 6, max: 32 })
    );
  }

  async signup(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let mobilephone = req.body.mobilephone;
    let usertype = req.body.usertype;

    // Validation
    if (!username || !password || !mobilephone)
      return { result: false, msg: "Empty input !!" };

    if (!this.validateUsername(username, password, mobilephone, usertype))
      return { result: false, msg: "Invalid input !!" };

    // Existed user
    let users;
    try {
      users = await User.find({
        $or: [{ username: username }, { mobilephone: mobilephone }],
      });
    } catch (error) {
      console.error(error, error.stack);
      return { result: false, msg: "Action fail !!" };
    }

    if (users.length > 0) 
      return { result: false, msg: "Existed username or mobilephone !!" };
    
    // hash password
    password = await bcrypt.hash(password, saltRounds);

    // Create user
    try {
      let user = await User.create({
        username: username,
        password: password,
        mobilephone: mobilephone,
        typeuserId: usertype * 1,
      });
    } catch (error) {
      console.error(error, error.stack);
      return false;
    }
    return true;
  }
}

module.exports = new SignupController();
