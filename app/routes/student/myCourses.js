const router = require("express").Router(),
  rating = require("./rating"),
  homepageController = require("../../controllers/student/myCourses");

router.use("/rating", rating);

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
