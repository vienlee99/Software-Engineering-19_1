const router = require("express").Router(),
  homepageController = require("../../controllers/student/rating");

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
