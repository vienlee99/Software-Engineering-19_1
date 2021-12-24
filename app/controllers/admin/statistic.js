class StatisticController {
    index(req, res) {
      res.render("statistic", {
        layout: "admin/layout-1",
        path: req.originalUrl.split("?").shift(),
        where:'statistic'
      });
    }
  }
  
  module.exports = new StatisticController();
  