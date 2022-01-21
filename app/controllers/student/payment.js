const coursesModel = require("../../models/courseModel");
const userModel = require("../../models/userModel");
const studentModel = require("../../models/studentModel");
class StudentPaymentController {
  async index(req, res) {
    let id = req.query.id;

    let detail = await coursesModel.findById(id);

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
  }

 async payment(req, res) {

   let {courseId, userId} = req.body;
   let course = await coursesModel.findById(courseId);
   let user = await userModel.findById(userId);
   
  //  console.log(course.cost)
   console.log(user.remainningBalance)
   if (user.remainningBalance < course.cost) {
    console.log('?zzzzzzzz?')

      return res.send("Tài khoản không đủ đề thanh toán");
    }
    console.log('?xxxxxxxxxxxxxxxx?')

    try {
      let a = await coursesModel.updateOne(
        { _id: courseId },
        { $push: { studentId: user.studentId } },
        function(){}
        );
        console.log(a)
        res.send("thành công",a);
      } catch (error) {
      console.error(error, error.stack);
      return false;
    }
  }
}

module.exports = new StudentPaymentController();
