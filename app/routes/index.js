const router = require("express").Router(),
  welcome = require("./welcome"),
  signin = require("./signin"),
  signup = require("./signup"),
  admin = require("./admin"),
  student = require("./student"),
  teacher = require("./teacher");

router.use(["/signin", "/signup"], function (req, res, next) {
  if (!req.session.user) next();
  console.log("ccccccccccccc");
});

router.use("/signin", signin);
router.use("/signup", signup);

router.use(
  "/",
  function (req, res, next) {
    if (!req.session.user) next();
    else {
      next("route");
      console.log("bbbbbbbbbbbbbb");
    }
  },
  welcome
);

router.use(
  "/",
  function (req, res, next) {
    next();
    console.log("ccccc");
    // if (req.session.user.typeUserId === 0) next();
    // else next("route");
    console.log("ccccc");
  },
  admin
);

router.use(
  "/",
  function (req, res, next) {
    if (req.session.user.typeUserId === 1) next();
    else next("route");
  },
  student
);
router.use(
  "/",
  function (req, res, next) {
    if (req.session.user.typeUserId === 2) next();
    else next("route");
  },
  teacher
);

// switch (req.session.user.typeUserId) {
//   case 0:
//     console.log("hello!admin");
//     router.use("/:admin", admin);
//     break;
//   case 1:
//     console.log("hello!student");
//     router.use(student);
//     break;
//   case 2:
//     console.log("hello!teacher");
//     router.use(teacher);
//     break;
//   default:
//     break;
// }
// next();

// router.use("/", welcome);
// router.use("/signin", signin);
// router.use("/signup", signup);
// router.use("/admin",admin);

// router.use("/student",student);

// router.use("/teacher",teacher);

// next();

module.exports = router;
