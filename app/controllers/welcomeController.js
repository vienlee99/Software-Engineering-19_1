class WelcomeController {
  index(req, res) {
    res.render("welcome", {
      layout: "anonymous-layout",
      path: "/welcome",
    });
  }
}
module.exports = new WelcomeController();
