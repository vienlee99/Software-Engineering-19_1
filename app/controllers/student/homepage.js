class StudentHomepageController {
  index(req, res) {
    console.log("sfdsfsdfds");
    res.render("student/homepage", {
      layout: "student/layout1",
      path: "/homepage",
    });
  }
}

module.exports = new StudentHomepageController();
