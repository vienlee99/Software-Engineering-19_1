const courseModel = require("../../models/courseModel");
const userModel = require("../../models/userModel");
const transactionModel = require("../../models/TransactionModel");
const moment = require("moment");
const MonthIndex = ['Jan', 'Feb', 'March','Apr',"May", "Jun", "Jul", "Aug", "Sep", "Oct",'Nov','Dec']

class DashboardController {
  async index(req, res) {
    let result;

    const [
      totalCourse,
      totalStudent,
      totalTeacher,
      incCourse,
      incStudent,
      incTeacher,
    ] = await Promise.all([
      courseModel.count({}),
      userModel.find({ typeuserId: 1 }).count(), // teacher count
      userModel.find({ typeuserId: 2 }).count(), // student count
      courseModel
        .find({
          dateStart: {
            $gte: moment().startOf("month").toDate(),
            $lte: moment().endOf("month").toDate(),
          },
        })
        .count(),
      userModel // teacher count
        .find({
          typeuserId: 1,
          createdDate: {
            $gte: moment().startOf("month").toDate(),
            $lte: moment().endOf("month").toDate(),
          },
        })
        .count(),
      userModel // student count
        .find({
          typeuserId: 2,
          createdDate: {
            $gte: moment().startOf("month").toDate(),
            $lte: moment().endOf("month").toDate(),
          },
        })
        .count(),
        transactionModel.aggregate([  //incomeNow
          {
            $match: {
              type: 2,
              time: {
                $gte: moment().startOf("month").toDate(),
                $lte: moment().endOf("month").toDate(),
              },
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$value" },
            },
          }
        ])[0].total,
        transactionModel.aggregate([  //incomeLastyear
          {
            $match: {
              type: 2,
              time: {
                $gte: moment().startOf("month").subtract(1, 'year').toDate(),
                $lte: moment().endOf("month").subtract(1, 'year').toDate(),
              },
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$value" },
            },
          }
        ])[0].total,
    ]);

    // MonthNow
    // totalSubject
    // totalCourse
    // topCourses name total inc Subject


  

    res.render("admin/dashboard", {
      layout: "admin/layout1",
      path: "/dashboard",
      where: "home",
    });
  }
}

module.exports = new DashboardController();
