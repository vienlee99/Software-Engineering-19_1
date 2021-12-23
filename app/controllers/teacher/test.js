class DashboardController {
    index(req, res) {
      res.render("teacher/test", {
        layout: "teacher/layout1",
        path: 'teacher/test',
      });
    }
  }
  
  module.exports = new DashboardController();
  