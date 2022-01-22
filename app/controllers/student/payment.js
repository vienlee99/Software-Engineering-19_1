const coursesModel = require("../../models/courseModel");
const userModel = require("../../models/userModel");
const studentModel = require("../../models/studentModel");
class StudentPaymentController {
  async index(req, res) {
    try {
      let id = req.query.id;
      if (id === undefined) return res.redirect("back");

      let detail = await coursesModel.findById(id).lean();

      res.render("student/payment", {
        layout: "student/layout1",
        courseId: id,
        userId: req.session.user._id.toString(),
        name: detail.name,
        cost: detail.cost,
        remainningBalance: req.session.user.remainningBalance,
        // imagePath: detail.imagePath,
        path: "/payment",
      });
    } catch (e) {
      console.log(e);
    }
  }

  async payment(req, res) {
    let { courseId, userId } = req.body;
    
    let course = await coursesModel.findById(courseId).lean();
    let user = await userModel.findById(userId).lean();
    if (user.remainningBalance < course.cost) {
      return res.send("Tài khoản không đủ đề thanh toán");
    }

    try {
      let a = await coursesModel.updateOne(
        { _id: courseId },
        { $push: { studentId: user.studentId } }
      );
      let b = await studentModel.updateOne(
        { _id: user.studentId },
        { $push: { coursetId: courseId } }
      );
      res.send("thành công");
    } catch (error) {
      console.error(error, error.stack);
      res.send("thành ccc");
      return false;
    }
  }
}

module.exports = new StudentPaymentController();
