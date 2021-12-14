class WelcomeController {
  index(req, res) {
    res.render("welcome", {
      layout: "anonymous-layout",
      css: "welcome",
      js: "welcome",
    });
  }
}

module.exports = new WelcomeController();
