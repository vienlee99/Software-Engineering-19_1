class DashboardController {
    index(req, res) {
      res.render("teacher/homepage", {
        layout: "teacher/layout1",
        path:  '/homepage',
      });
    }
  }
  
  module.exports = new DashboardController();
  