const router = require("express").Router(),
  dashboard = require("./dashboard"),
  search = require("./search"),
  statistic = require("./statistic");

router.get("/search", search);
router.get("/statistic", statistic);
router.get("/", dashboard);

module.exports = router;
