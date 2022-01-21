const router = require("express").Router(),
  homepage = require("./homepage"),
  course_detail = require("./course_detail"),
  courseDetailOfMyCourses = require("./courseDetailOfMyCourses"),
  myCourses = require("./myCourses"),
  payment = require("./payment"),
  search = require("./search"),
  signin = require("./signin"),
  signup = require("./signup"),
  coursesModel = require("../../models/courseModel");

router.use("/", homepage);
router.use("/course_detail", course_detail);
router.use("/myCourses", myCourses);
router.use("/search", function (req, res) {
  let keyword = req.query.q;
});
router.use("/", homepage);
router.use("/", homepage);

module.exports = router;
