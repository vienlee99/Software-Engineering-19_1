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
    typeuserId: 2, // loại người dùng 0-admin 1-teacher 2-student
  };
  next();
});
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
router.get("/signout", function (req, res, next) {
  req.session.user = null;
  res.redirect("/");
});
router.use(["/signin", "/signup"], function (req, res, next) {
  if (!req.session.user) next();
});

router.use("/signin", signin);
router.use("/signup", signup);

router.use("/", function (req, res, next) {
  if (!req.session.user) welcome(req, res, next);
  else next();
});
router.use("/", function (req, res, next) {
  if (req.session.user && req.session.user.typeuserId === 0)
    admin(req, res, next);
  else next();
});
router.use("/", function (req, res, next) {
  if (req.session.user && req.session.user.typeuserId === 1)
    teacher(req, res, next);
  else next();
});
router.use("/", function (req, res, next) {
  if (req.session.user && req.session.user.typeuserId === 2)
    student(req, res, next);
  else res.redirect("/");
});

module.exports = router;
