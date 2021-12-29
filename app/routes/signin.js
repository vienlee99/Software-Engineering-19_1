const router = require("express").Router(),
  signinController = require("../controllers/signinController");

router.use("/", function (req, res, next) {
  if (!req.session.user) next();
});

router.get("/", (req, res) => {
  signinController.index(req, res);
});

router.post("/", (req, res,next) => {
  signinController.signin(req, res,next); 
});


module.exports = router;
