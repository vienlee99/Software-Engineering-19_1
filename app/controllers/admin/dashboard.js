class DashboardController {
    index(req, res) {
      res.render("dashboard", {
        layout: "admin/layout-1",
        path: req.originalUrl.split("?").shift(),
      });
    }
  }
  
  module.exports = new DashboardController();
  