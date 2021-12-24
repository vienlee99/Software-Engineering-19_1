class SearchController {
    index(req, res) {
      res.render("search", {
        layout: "admin/layout-1",
        path: req.originalUrl.split("?").shift(),
        where:'search'
      });
    }
  }
  
  module.exports = new SearchController();
  