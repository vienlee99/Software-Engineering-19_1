class StudentCourseDetail {
  index(req, res) {
    res.render("student/course_detail", {
      layout: "student/layout1",
      path: "/course_detail",
    });
  }
}

module.exports = new StudentCourseDetail();
