const router = require("express").Router(),
  homepage = require("./homepage");
//   search = require("./search"),
//   statistic = require("./statistic");

router.get("/", homepage);
// router.get("/search", search);
// router.get("/statistic", statistic);

module.exports = router;
