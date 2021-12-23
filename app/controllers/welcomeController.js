class WelcomeController {
  index(req, res) {
    // res.render("test", {
    //   layout: "admin/layout-1",
    //   path: '/test',
    //   where: 'home',
    console.log('nzzzzzzzzzzzzzzzzz')
    res.render("welcome", {
      layout: "anonymous-layout",
      path: "/welcome",
    });
    // res.render("teacher/test", {
    //   layout: "teacher/layout-1",
    //   path: "test",
    //   where: "home",
    // });
  }
}
module.exports = new WelcomeController();
