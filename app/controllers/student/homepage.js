class DashboardController {
    index(req, res) {
      res.render("teacher/test", {
        layout: "teacher/teacher_layout",
        path: 'teacher/test',
      });
    }
  }
  
  module.exports = new DashboardController();
  