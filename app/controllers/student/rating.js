const coursesModel = require("../../models/courseModel");
const studentModel = require("../../models/studentModel");
class StudentRatingController {
  async index(req, res) {
    let id = req.query.id;
    let course = await coursesModel.findById(id).lean();
    res.render("student/rating", {
      course:course,
      layout: "student/layout1",
      path: "/rating",
    });
  }
}

module.exports = new StudentRatingController();
