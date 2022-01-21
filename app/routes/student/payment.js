const router = require("express").Router(),
  homepageController = require("../../controllers/student/payment");

router.get("/", (req, res) => {
  console.log('GET????????')

  homepageController.index(req, res);
});
router.post("/pay", async (req, res) => {
  console.log('router.post("/",  (req, res) => {')
  await homepageController.payment(req, res);
});
// router.post("/", (req, res) => {
//   if (homepageController.login(req, res)) {
//     res.redirect("../");
//   } else {
//     res.redirect("/");
//   }
// });

module.exports = router;
