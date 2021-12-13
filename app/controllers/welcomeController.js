class WelcomeController {
  index(req, res) {
    res.render("welcome", {
      css: "welcome",
      js: "welcome",
    });
  }
}

module.exports = new WelcomeController();
