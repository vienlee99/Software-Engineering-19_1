const Course = require("../../models/courseModel");
var a = require("mongodb").ObjectId;

class TeacherContrller {
  // [GET] / teacher
  index(req, res, next) {
    res.render("teacher/dashboard", {
      layout: "teacher/teacher_layout",
      path: req.originalUrl.split("?").shift() + "dashboard",
    });
  }

  // [GET] /teacher/search
  search(req, res, next) {
    res.send("teacher/search");
  }

  // [GET] /teacher/mycourses
  mycourses(req, res, next) {
    //   console.log(req.session.user)
    Course.find({})
    // Course.aggregate([
    //   //incomeNow
    //   {
    //     $match: {
    //       "teacher.userId": req.session.user._id.toString(),
    //     },
    //   },
    //   {
    //     $lookup: {
    //       from: "teachers",
    //       localField: "teacherId",
    //       foreignField: "_id",
    //       as: "teacher",
    //     },
    //   },
    // ])
      .lean()
      .then((courses) => {
        res.render("teacher/mycourses", {
          layout: "teacher/teacher_layout",
          path: req.originalUrl.split("?").shift() + "dashboard",
          courses: courses,
        });
      })
      .catch(next);
  }

  // [GET] /teacher/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((courses) => {
        res.render("teacher/edit", {
          layout: "teacher/teacher_layout",
          path: req.originalUrl.split("?").shift() + "dashboard",
          courses: courses,
        });
      })
      .catch(next);
  }

  // [GET] /teacher/upload
  upload(req, res, next) {
    res.render("teacher/upload", {
      layout: "teacher/teacher_layout",
      path: req.originalUrl.split("?").shift() + "dashboard",
    });
  }

  // [GET] /teacher/pickadate
  pickadate(req, res, next) {
    res.render("teacher/pickadate", {
      layout: "teacher/teacher_layout",
      path: req.originalUrl.split("?").shift() + "dashboard",
    });
  }

  // [POST] /teacher/store
  store(req, res, next) {
    const formData = req.body;
    const courses = new Course(formData);
    courses
      .save()
      .then(() => res.redirect("mycourses"))
      .catch((error) => {});
  }

  // [PUT] /teacher/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("mycourses"))
      .catch(next);
  }

  // [GET] /teacher/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((courses) => {
        res.render("teacher/show", {
          layout: "teacher/teacher_layout",
          path: req.originalUrl.split("?").shift() + "dashboard",
          courses: courses,
        });
      })
      .catch(next);
  }
}

module.exports = new TeacherContrller();
