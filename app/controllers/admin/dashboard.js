const courseModel = require("../../models/courseModel");
const userModel = require("../../models/userModel");
const transactionModel = require("../../models/TransactionModel");
const moment = require("moment");
const MonthIndex = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class DashboardController {
  async index(req, res) {
    let result;

    let [
      totalCourse,
      totalTeacher,
      totalStudent,
      incCourse,
      incTeacher,
      incStudent,
      incomeNow,
      incomeLastyear,
      totalSubject,
      topCourses,
    ] = await Promise.all([
      courseModel.count({}), //totalCourse
      userModel.find({ typeuserId: 1 }).count(), // totalTeacher
      userModel.find({ typeuserId: 2 }).count(), // totalStudent
      courseModel // incCourse
        .find({
          dateStart: {
            $gte: moment().startOf("month").toDate(),
            $lte: moment().endOf("month").toDate(),
          },
        })
        .count(),
      userModel // incTeacher
        .find({
          typeuserId: 1,
          createdDate: {
            $gte: moment().startOf("month").toDate(),
            $lte: moment().endOf("month").toDate(),
          },
        })
        .count(),
      userModel // incStudent
        .find({
          typeuserId: 2,
          createdDate: {
            $gte: moment().startOf("month").toDate(),
            $lte: moment().endOf("month").toDate(),
          },
        })
        .count(),
      transactionModel.aggregate([
        //incomeNow
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
        },
      ]),
      transactionModel.aggregate([
        //incomeLastyear
        {
          $match: {
            type: 2,
            time: {
              $gte: moment().startOf("month").subtract(1, "year").toDate(),
              $lte: moment().endOf("month").subtract(1, "year").toDate(),
            },
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: "$value" },
          },
        },
      ]),
      courseModel.distinct("subject").count(), //totalSubject
      courseModel
        .aggregate([
          // topCourses name total inc Subject
          {
            $project: {
              total: { $size: "$studentId" },
              name: 1,
              subject: 1,
            },
          },
        ])
        .sort({ total: -1 })
        .limit(5),
    ]);
    incomeNow = incomeNow.length ? incomeNow[0].total : 0;
    incomeLastyear = incomeLastyear.length ? incomeLastyear[0].total : 0;
    console.log(topCourses)

    let topCourseId = topCourses.map((x) => x._id);
    let inc = await courseModel.aggregate([
      {
        $match: {
          _id: { $in: topCourseId },
          dateStart: {
            $gte: moment().startOf("month").toDate(),
          },
        },
      },
      {
        $project: {
          inc: { $size: "$studentId" },
        },
      },
    ]);
    topCourses = topCourses.map((course) => {
      let find = inc.find((x) => x._id.equals(course._id));
      course.inc = find?find.inc:0;
      return course;
    });

    let monthNow = moment().month();
    let [dataNow, dataLastYear] = await Promise.all([
      this.getDataByTime(moment()),
      this.getDataByTime(moment().subtract(1, "year")),
    ]);
    // console.log((moment().startOf("month").subtract(5, "months").toDate()))
    // console.log((moment().endOf("month").toDate()))
    res.render("admin/dashboard", {
      layout: "admin/layout1",
      path: "/dashboard",
      where: "home",
      totalCourse: totalCourse,
      totalStudent: totalStudent,
      totalTeacher: totalTeacher,
      incCourse: incCourse,
      incTeacher: incTeacher,
      incStudent: incStudent,
      incomeNow: incomeNow,
      incomeLastyear: incomeLastyear,
      totalSubject: totalSubject,
      topCourses: topCourses,
      dataNow: dataNow,
      dataLastYear: dataLastYear,
      monthNow: monthNow,
    });
  }
  //
  async getDataByTime(time) {
    let dataJSON = await transactionModel.aggregate([
      {
        $match: {
          time: {
            $gte: time.clone().startOf("month").subtract(5, "months").toDate(),
            $lte: time.clone().toDate(),
          },
        },
      },
      {
        $group: {
          _id: { $month: "$time" },
          value: { $sum: "$value" },
        },
      },
    ]);
    let data = new Array(12);
    dataJSON.forEach((element) => {
      data[element._id - 1] = element.value;
    });
    return data;
  }
}

module.exports = new DashboardController();
