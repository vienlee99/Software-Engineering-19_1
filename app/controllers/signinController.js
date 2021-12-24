const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = require('../../app/config/security.config').saltRounds;

class SigninController {
  index(req, res) {
    res.render("signin", {
      layout: "blank-layout",
      path: req.originalUrl.split("?").shift(),
    });
  }

  async signin(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    if (!username || !password) return false;

    // password = await bcrypt.hash(password, saltRounds);
    // password = bcrypt.hash(password, saltRounds);

    let users = await User.find({
      username: username,
      password: password,
    });
       
    if (users.length === 1) {
      req.session.user = users[0];
      req.session.save();
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new SigninController();

