const router = require("express").Router(),
  signinController = require("../controllers/signinController");

router.use("/", function (req, res, next) {
  if (!req.session.user) next();
});

router.get("/", (req, res) => {
  signinController.index(req, res);
});

router.post("/", signinController.signin); 


module.exports = router;
