class SearchController {
    index(req, res) {
      res.render("admin/search", {
        layout: "admin/layout1",
        path: '/search',
        where:'search'
      });
    }
  }
  
  module.exports = new SearchController();
  