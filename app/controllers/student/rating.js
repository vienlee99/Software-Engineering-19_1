class StudentRatingController {
  index(req, res) {
    res.render("student/rating", {
      layout: "student/layout1",
      path: "/rating",
    });
  }
}

module.exports = new StudentRatingController();
