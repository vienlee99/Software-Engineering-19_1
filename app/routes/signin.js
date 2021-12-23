const router = require("express").Router(),
  signinController = require("../controllers/signinController");

router.get("/", (req, res) => {
  signinController.index(req, res);
});
router.post("/", (req, res) => {
  console.log('success!zzzzz')

  if (signinController.login(req, res)) {
    res.redirect("../");
    console.log('success!zzzzz')
  } else {
    res.redirect("/");
    console.log('no!zzzzz')

  }
});

module.exports = router;
