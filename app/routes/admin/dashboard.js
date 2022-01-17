const router = require("express").Router();
dashboardController = require("../../controllers/admin/dashboard");

router.get("/", (req, res) => {
  dashboardController.index(req, res);
});
router.post("/", (req, res) => {
  if (dashboardController.login(req, res)) {
    res.redirect("../");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
