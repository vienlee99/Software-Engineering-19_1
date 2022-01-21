const coursesModel = require("../../models/courseModel");
const studentModel = require("../../models/studentModel");

class StudentMyCoursesController {
  async index(req, res) {
    let studentId = req.session.user.studentId;
    let student = await studentModel.findById(studentId).lean();
    let course = student.courseId;
    course = await coursesModel.find({ _id : { $in : course } } ).lean();

    // find({
    //   name: { $regex: keyword, $options: "i" },
    // }).lean();
    course = course.map((x) => {
      x._id = x._id.toString();
      return x;
    });

    let msg = "";
    if (course.length == 0) {
      msg = "Bạn chưa đăng ký khoá học nào!";
    }

    res.render("student/myCourses", {
      layout: "student/layout1",
      path: "/myCourses",
      course: course,
      msg: msg,
      path: "/search",
    });
  }
}

module.exports = new StudentMyCoursesController();
