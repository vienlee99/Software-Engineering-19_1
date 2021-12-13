const router = require("express").Router(),
  signinController = require("../controllers/signinController");

router.get("/", (req, res) => {
  signinController.index(req, res);
});
router.post("/", (req, res) => {
  if (signinController.login(req, res)) {
    res.redirect("../");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
