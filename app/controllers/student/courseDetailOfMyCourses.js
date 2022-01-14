class StudentCourseDetailOfMyCourses {
  index(req, res) {
    res.render("student/courseDetailOfMyCourses", {
      layout: "student/layout1",
      path: "/courseDetailOfMyCourses",
    });
  }
}

module.exports = new StudentCourseDetailOfMyCourses();
