class StudentSignInController {
  index(req, res) {
    res.render("student/signin", {
      layout: "student/layoutAnonymous",
      path: "/signin",
    });
  }
}

module.exports = new StudentSignInController();
