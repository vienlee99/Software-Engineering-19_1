class SigninController {
  index(req, res) {
    // res.render("signin", {
    //   cssP: () => "nav",
    //   navP: () => "nav",
    //   footerP: () => "footer",
    //   scriptsP: () => "scripts",
    // });
    res.render("signin", {});
  }

  async signin(req, res) {
    var username = req.body.user;
    var password = req.password;
    if (!username || !password) return false;

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
