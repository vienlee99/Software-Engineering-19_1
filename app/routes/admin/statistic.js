const router = require("express").Router();
statisticController = require("../../controllers/admin/statistic");

router.get("/", (req, res) => {
    statisticController.index(req, res);
});
router.post("/", (req, res) => {
//   if (statisticController.login(req, res)) {
//     res.redirect("../");
//   } else {
//     res.redirect("/");
//   }
});

module.exports = router;

