const router = require("express").Router();
searchController = require("../../controllers/admin/search");

router.get("/", (req, res) => {
  searchController.index(req, res);
});

router.post("/", (req, res) => {
  //   if (searchController.login(req, res)) {
  //     res.redirect("../");
  //   } else {
  //     res.redirect("/");
  //   }
});

module.exports = router;
