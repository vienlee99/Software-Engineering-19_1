const router = require("express").Router(),
  homepageController = require("../../controllers/student/payment");

router.post("/pay", (req, res) => {
  console.log('router.post("/",  (req, res) => {');
  homepageController.payment(req, res);
});
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
