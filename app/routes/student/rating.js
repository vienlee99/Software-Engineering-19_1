const router = require("express").Router(),
  homepageController = require("../../controllers/student/rating"),
  upload = require("../../config/multer.config");


router.post("/",upload.single('product'), async(req, res) => {
  console.log('dfsdfsdf')
  await homepageController.rating(req, res);
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
