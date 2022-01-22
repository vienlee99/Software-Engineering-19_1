const coursesModel = require("../../models/courseModel");
const studentModel = require("../../models/studentModel");
class StudentRatingController {
  async index(req, res) {
    let id = req.query.id;
    let course = await coursesModel.findById(id).lean();
    if (!course) return res.redirect("back");
    let user = req.session.user;
    user._id = user._id.toString();
    course._id = course._id.toString();

    res.render("student/rating", {
      course: course,
      user: user,
      layout: "student/layout1",
      path: "/rating",
    });
  }

  async rating(req, res) {
    let { courseId, userId, rating, cmt } = req.body;

    let course = await coursesModel.findById(courseId).lean();
    course.rating =
      (course.rating * course.studentId.length + rating) / (course.studentId.length + 1);
    console.log(course.rating);
    try {
      let a = await coursesModel.updateOne(course);

      res.send("thành công");
    } catch (error) {
      console.error(error, error.stack);
      res.send("thành ccc");
      return false;
    }
  }
}

module.exports = new StudentRatingController();
