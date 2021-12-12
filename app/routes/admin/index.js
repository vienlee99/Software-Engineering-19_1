const route = require("express").Router(),
  dashboard = require("./dashboard"),
  search = require("./search"),
  statistic = require("./statistic");

route.get("");
route.get("search");
route.get("statistic");

function route(app) {
  app.use("/", welcome);
  app.use("/signin", signin);
  app.use("/signup", signup);

  // route to admin
  app.use("/.*", function (req, res, next) {
    switch (req.session.usertype) {
      case "admin":
        app.use(admin);
        break;
      case "student":
        app.use(signup);
        break;
      case "teacher":
        app.use(teacher);
        break;
      default:
        break;
    }
  });
}

module.exports = route;
