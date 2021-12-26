const router = require("express").Router();
homepageController = require("../../controllers/student/homepage");

router.get("/", (req, res) => {
  console.log("sdfsdfsd");
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
