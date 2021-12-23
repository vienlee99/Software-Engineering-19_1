const router = require("express").Router(),
  signupController = require("../controllers/signupController");

router.use("/", function (req, res, next) {
  if (!req.session.user) next();
});

router.get("/", (req, res) => {
  signupController.index(req, res);
});
router.post("/", (req, res) => {
  if (signupController.login(req, res)) {
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
