const router = require("express").Router(),
  homepage = require("./homepage"),
  course_detail = require("./course_detail"),
  courseDetailOfMyCourses = require("./courseDetailOfMyCourses"),
  myCourses = require("./myCourses"),
  payment = require("./payment"),
  rating = require("./rating"),
  search = require("./search"),
  signin = require("./signin"),
  signup = require("./signup");
router.use("/", homepage);
// router.get("/search", search);
// router.get("/statistic", statistic);

module.exports = router;
