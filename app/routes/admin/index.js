const route = require("express").Router(),
  dashboard = require("./dashboard"),
  search = require("./search"),
  statistic = require("./statistic");

route.get("/", dashboard);
route.get("/search", search);
route.get("/statistic", statistic);

module.exports = route;
