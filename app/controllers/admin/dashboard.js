class DashboardController {
    index(req, res) {
      res.render("admin/dashboard", {
        layout: "admin/layout-1",
        path: req.originalUrl.split("?").shift()+'dashboard',
      });
    }
  }
  
  module.exports = new DashboardController();
  