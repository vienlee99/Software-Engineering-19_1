class StudentSearch {
  index(req, res) {
    res.render("student/search", {
      layout: "student/layout1",
      path: "/search",
    });
  }
}

module.exports = new StudentSearch();
