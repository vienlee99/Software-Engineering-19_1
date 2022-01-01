const passport = require("passport");

class SigninController {
  index(req, res, msg) {
    res.render("signin", {
      layout: "blank-layout",
      path: req.originalUrl.split("?").shift(),
      msg: msg,
    });
  }

  async signin(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err || !user) {
        return this.index(req, res, "Incorrect username !!");
      }

      req.logIn(user, (err) => {
        if (err) {
          return this.index(req, res, "Incorrect password !!");
        }

        req.session.user = user;

        if (req.body.keep === "on") {
          res.cookie("username", user.Username, { signed: true });
        }

        return res.redirect('/');
      });
    })(req, res, next);
  }
}

module.exports = new SigninController();
