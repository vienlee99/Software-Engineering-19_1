const router = require("express").Router(),
  dashboard = require("./dashboard"),
  search = require("./search"),
  statistic = require("./statistic");

router.use("/", dashboard);
router.use("/search", search);
router.use("/statistic", statistic);

module.exports = router;
