class StudentSignUpController {
  index(req, res) {
    res.render("student/signup", {
      layout: "student/layoutAnonymous",
      path: "/signup",
    });
  }
}

module.exports = new StudentSignUpController();
