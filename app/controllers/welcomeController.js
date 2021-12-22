class WelcomeController {
  index(req, res) {
    // res.render("welcome", {
      res.render("test", {
      // layout: "anonymous-layout",
      layout: "admin/layout-1",
      // path: '/welcome',
      path: '/test',
      where: 'home',
    });
  }
}

module.exports = new WelcomeController();
