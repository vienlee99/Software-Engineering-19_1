const router = require("express").Router(),
  signupController = require("../controllers/signupController");

router.use("/", function (req, res, next) {
  if (!req.session.user) next();
});

router.get("/", (req, res) => {
  signupController.index(req, res);
});
router.post("/", async (req, res) => {
  let r = await signupController.signup(req, res);  
  if (r.result) {
    return res.redirect("/");
  } else {
    signupController.index(req, res, r.msg);
  }
});

module.exports = router;
