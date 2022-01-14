class StudentMyCoursesController {
  index(req, res) {
    res.render("student/myCourses", {
      layout: "student/layout1",
      path: "/myCourses",
    });
  }
}

module.exports = new StudentMyCoursesController();
