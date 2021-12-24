const router = require("express").Router(),
  welcome = require("./welcome"),
  signin = require("./signin"),
  signup = require("./signup"),
  admin = require("./admin"),
  student = require("./student"),
  teacher = require("./teacher");

// zzzzzzzzzzzzzzzzz Bỏ qua đăng nhập zzzzzzzzzzzzzzz
router.use(function (req, res, next) {
  req.session.user = {
    _id: 123,
    username: "root",
    password: "123",
    typeUserId: 0,    // loại người dùng 0-admin 1-teacher 2-student
  };
  next();
});
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

router.use(["/signin", "/signup"], function (req, res, next) {
  if (!req.session.user) next();
});

router.use("/signin", signin);
router.use("/signup", signup);

var index = welcome;

router.use(
  "/",
  function (req, res, next) {
    if (!req.session.user) {
      index = welcome;
    } else {
      // console.log(req.session.user);
      switch (req.session.user.typeUserId) {
        case 0:
          index = Object.assign(index, admin);
          break;
        case 1:
          index = Object.assign(index, teacher);
          break;
        case 2:
          index = Object.assign(index, student);
          break;
        default:
          break;
      }
    }
    next();
  },
  index
);

module.exports = router;
