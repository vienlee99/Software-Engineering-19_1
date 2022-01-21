const coursesModel = require("../../models/courseModel");
const teacherModel = require("../../models/teacherModel");
class StudentCourseDetail {
  async index(req, res) {
    let id = req.query.id;
    let detail = await coursesModel.findById(id);
    let teacher = await teacherModel.findById(detail.teacherId.toString());


    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    let dateStart = new Date(detail.dateStart);
    dateStart = dateStart.toLocaleDateString("vi-VN", options);
    let deadDateEnroll = new Date(detail.deadDateEnroll);
    deadDateEnroll = deadDateEnroll.toLocaleDateString("vi-VN", options)

    res.render("student/course_detail", {
      layout: "student/layout1",
      id:id,
      name: detail.name,
      cost: detail.cost,
      name: detail.name,
      dateStart: dateStart,
      numberOfStudent: detail.numberOfStudent,
      deadDateEnroll: deadDateEnroll,
      numberOfStudentCurrent: detail.studentId.length,
      subject: detail.subject,
      teacherName: teacher.name,
      path: "/course_detail",
    });
  }
}

module.exports = new StudentCourseDetail();
