const router = require("express").Router(),
  signupController = require("../controllers/signupController");

router.get("/", (req, res) => {
  signupController.index(req, res);
});
router.post("/", (req, res) => {
  if (signupController.login(req, res)) {
    res.redirect("../");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
