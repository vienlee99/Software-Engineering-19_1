const User = require('../models/userModel');

class SigninController {
  index(req, res) {
    res.render("signin", {
      layout: "blank-layout",
      path: req.originalUrl.split("?").shift(),
    });
  }

  async signin(req, res) {
    let username = req.body.user;
    let password = req.password;
    if (!username || !password) return false;

    password = await bcrypt.hash(password, saltRounds);

    let user = await User.find({
      username: username,
      password: password,
    });

    if (user.length === 1) {
      req.session.user = user;
      return true;
    } else return false;
  }
}

module.exports = new SigninController();
