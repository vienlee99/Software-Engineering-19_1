const router = require("express").Router(),
  dashboard = require("./dashboard"),
  search = require("./search"),
  statistic = require("./statistic");

  console.log('xxxxxxxxxxxxxxxxxxxxxx')

router.get("/", dashboard);
router.get("/search", search);
router.get("/statistic", statistic);

module.exports = router;
