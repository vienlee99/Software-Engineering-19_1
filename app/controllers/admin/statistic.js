class StatisticController {
    index(req, res) {
      res.render("admin/statistic", {
        layout: "admin/layout1",
        path: req.originalUrl.split("?").shift(),
        where:'statistic'
      });
    }
  }
  
  module.exports = new StatisticController();
  