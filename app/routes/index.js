const router = require("express").Router(),
  welcome = require("./welcome"),
  signin = require("./signin"),
  signup = require("./signup"),
  admin = require("./admin"),
  student = require("./student"),
  teacher = require("./teacher");

router.use(function (req, res, next) {
  if (!req.session.user) {
    router.use("/", welcome);
    router.use("/signin", signin);
    router.use("/signup", signup);
  } else {
    switch (req.session.user.usertype) {
      case "admin":
        router.use(admin);
        break;
      case "student":
        router.use(student);
        break;
      case "teacher":
        router.use(teacher);
        break;
      default:
        break;
    }
  }
});

module.exports = router;
