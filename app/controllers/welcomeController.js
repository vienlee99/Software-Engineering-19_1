class WelcomeController {
  index(req, res) {
    // res.render("test", {
    //   layout: "admin/layout1",
    //   path: '/test',
    //   where: 'home',
    // res.render("welcome", {
    //   layout: "anonymous-layout",
    //   path: "/welcome",
    // });
    res.render("teacher/test", {
      layout: "teacher/teacher_layout",
      path: "test",
      where: "home",
    });
  }
}
module.exports = new WelcomeController();
