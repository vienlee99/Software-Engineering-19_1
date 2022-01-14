const router = require("express").Router();
homepageController = require("../../controllers/student/course_detail");

router.get("/", (req, res) => {
  homepageController.index(req, res);
});
// router.post("/", (req, res) => {
//   if (homepageController.login(req, res)) {
//     res.redirect("../");
//   } else {
//     res.redirect("/");
//   }
// });

module.exports = router;
