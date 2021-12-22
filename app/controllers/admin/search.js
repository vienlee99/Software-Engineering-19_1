class SearchController {
    index(req, res) {
      res.render("search", {
        layout: "admin/layout-1",
        path: req.originalUrl.split("?").shift(),
      });
    }
  }
  
  module.exports = new SearchController();
  