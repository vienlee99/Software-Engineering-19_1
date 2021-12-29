const router = require("express").Router();
const homepageRoute = require("./homepage");
const mycoursesRoute = require("./mycourses");
const editsRoute = require("./edit");
const uploadRoute = require("./upload");
const pickadateRoute = require("./pickadate");

router.use(function (req, res, next) {

  router.use("/pickadate", pickadateRoute);
  router.use("/upload", uploadRoute);
  router.use("/edit", editsRoute);
  router.use("/mycourses", mycoursesRoute);
  router.use("/", homepageRoute);

  next();
});


module.exports = router;