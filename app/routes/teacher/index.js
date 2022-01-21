const router = require("express").Router();
const homepageRoute = require("./homepage");
// const mycoursesRoute = require("./mycourses");
const editsRoute = require("./edit");
// const uploadRoute = require("./upload");
const pickadateRoute = require("./pickadate");
const storeRoute = require("./store");

const teacherContrller = require('../../controllers/teacher/teacherController');
router.get('/mycourses', teacherContrller.mycourses);
router.get('/upload', teacherContrller.upload);
router.get('/:slug', teacherContrller.show);
router.put('/:id', teacherContrller.update);


router.use(function (req, res, next) {

  router.use("/pickadate", pickadateRoute);
  // router.use("/upload", uploadRoute);
  router.use("/edit", editsRoute);
  // router.use("/mycourses", mycoursesRoute);
  router.use("/store", storeRoute);
  router.use("/", homepageRoute);

  next();
});


module.exports = router;
