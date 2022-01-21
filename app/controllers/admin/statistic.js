const courseModel = require("../../models/courseModel");
const userModel = require("../../models/userModel");
const teacherModel = require("../../models/teacherModel");
const moment = require("moment");
const transactionModel = require("../../models/TransactionModel");

class StatisticController {
  async index(req, res) {
    try {
      let [totalCourse, avgStudentC, avgIncomeC, totalTeacher, avgCourseT, avgIncomeT] =
        await Promise.all([
          courseModel.count({}), //totalCourse
          courseModel.aggregate([
            //avgStudentC
            {
              $match: {
                dateStart: {
                  $gte: moment().startOf("month").toDate(),
                  $lte: moment().endOf("month").toDate(),
                },
              },
            },
            {
              $group: {
                _id: null,
                avg: { $avg: { $size: "$studentId" } },
              },
            },
          ]),
          transactionModel.aggregate([
            // avgIncomeC
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
                _id: "$courseId",
                avg: { $avg: "$value" },
              },
            },
          ]),
          userModel.count({ typeuserId: 1 }), //totalTeacher
          courseModel.aggregate([
            //avgCourseT
            {
              $match: {
                dateStart: {
                  $gte: moment().startOf("month").toDate(),
                  $lte: moment().endOf("month").toDate(),
                },
              },
            },
            {
              $group: {
                _id: "$teacherId",
                count: { $count: {} },
              },
            },
            {
              $group: {
                _id: null,
                avg: { $avg: "$count" },
              },
            },
          ]),
          transactionModel.aggregate([
            // avgIncomeT
            {
              $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "users",
              },
            },
            {
              $unwind: "$users",
            },
            {
              $match: {
                "users.typeuserId": 1,
                time: {
                  $gte: moment().startOf("month").toDate(),
                  $lte: moment().endOf("month").toDate(),
                },
              },
            },
            {
              $group: {
                _id: "$userId",
                avg: { $avg: "$value" },
              },
            },
          ]),
        ]);
      avgStudentC = avgStudentC[0] ? avgStudentC[0].avg : 0;
      avgIncomeC = avgIncomeC[0] ? avgIncomeC[0].avg : 0;
      avgCourseT = avgCourseT[0] ? avgCourseT[0].avg : 0;
      avgIncomeT = avgIncomeT[0] ? avgIncomeT[0].avg : 0;

      let dataNewCourses = await this.getNewCourses();
      let dataNewStudents = await this.getNewStudents();
      let dataNewTeachers = await this.getNewTeachers();
      let [incCourse, incTeacher, avgStudentCL, avgIncomeCL, avgCourseTL, avgIncomeTL] =
        await this.getNewInc();
      let [subjectChart, teacherChart] = await this.getPieChart();
      console.log(subjectChart, teacherChart);
      let temp = {};
      temp.title = subjectChart.map((x) => x._id);
      temp.data = subjectChart.map((x) => x.count);
      subjectChart = JSON.stringify(temp);
      temp.title = teacherChart.map((x) => x._id);
      temp.data = teacherChart.map((x) => x.count);
      teacherChart = JSON.stringify(temp);

      avgStudentCL = avgStudentCL[0] ? avgStudentCL[0].avg : 0;
      avgIncomeCL = avgIncomeCL[0] ? avgIncomeCL[0].avg : 0;
      avgCourseTL = avgCourseTL[0] ? avgCourseTL[0].avg : 0;
      avgIncomeTL = avgIncomeTL[0] ? avgIncomeTL[0].avg : 0;
      incCourse = (incCourse * 100) / totalCourse;
      incTeacher = (incTeacher * 100) / totalTeacher;
      avgStudentCL = ((avgStudentCL - avgStudentC) * 100) / avgStudentCL;
      avgIncomeCL = ((avgIncomeCL - avgIncomeC) * 100) / avgIncomeCL;
      avgCourseTL = ((avgCourseTL - avgCourseT) * 100) / avgCourseTL;
      avgIncomeTL = ((avgIncomeTL - avgIncomeT) * 100) / avgIncomeTL;
      incCourse = parseFloat(incCourse).toFixed(2);
      incTeacher = parseFloat(incTeacher).toFixed(2);
      avgStudentCL = parseFloat(avgStudentCL).toFixed(2);
      avgIncomeCL = parseFloat(avgIncomeCL).toFixed(2);
      avgCourseTL = parseFloat(avgCourseTL).toFixed(2);
      avgIncomeTL = parseFloat(avgIncomeTL).toFixed(2);

      res.render("admin/statistic", {
        layout: "admin/layout1",
        path: req.originalUrl.split("?").shift(),
        where: "statistic",
        totalCourse: totalCourse,
        avgStudentC: avgStudentC,
        avgIncomeC: avgIncomeC,
        totalTeacher: totalTeacher,
        avgCourseT: avgCourseT,
        avgIncomeT: avgIncomeT,
        incCourse: incCourse,
        incTeacher: incTeacher,
        avgStudentCL: avgStudentCL,
        avgIncomeCL: avgIncomeCL,
        avgCourseTL: avgCourseTL,
        avgIncomeTL: avgIncomeTL,
        dataNewCourses: dataNewCourses,
        dataNewStudents: dataNewStudents,
        dataNewTeachers: dataNewTeachers,
        subjectChart: subjectChart,
        teacherChart: teacherChart,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getNewCourses() {
    let dataJSON = await courseModel.aggregate([
      {
        $match: {
          dateStart: {
            $gte: moment().clone().startOf("month").subtract(1, "years").toDate(),
          },
        },
      },
      {
        $group: {
          _id: { $month: "$dateStart" },
          count: { $count: {} },
        },
      },
    ]);
    let data = new Array(12);
    dataJSON.forEach((element) => {
      data[element._id - 1] = element.count;
    });
    return data;
  }

  async getNewStudents() {
    let dataJSON = await userModel.aggregate([
      {
        $match: {
          typeuserId: 2,
          createdDate: {
            $gte: moment().clone().startOf("month").subtract(1, "years").toDate(),
          },
        },
      },
      {
        $group: {
          _id: { $month: "$createdDate" },
          count: { $count: {} },
        },
      },
    ]);
    let data = new Array(12);
    dataJSON.forEach((element) => {
      data[element._id - 1] = element.count;
    });
    return data;
  }

  async getNewTeachers() {
    let dataJSON = await userModel.aggregate([
      {
        $match: {
          typeuserId: 1,
          createdDate: {
            $gte: moment().clone().startOf("month").subtract(1, "years").toDate(),
          },
        },
      },
      {
        $group: {
          _id: { $month: "$createdDate" },
          count: { $count: {} },
        },
      },
    ]);
    let data = new Array(12);
    dataJSON.forEach((element) => {
      data[element._id - 1] = element.count;
    });
    return data;
  }

  async getNewInc() {
    return await Promise.all([
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
      courseModel.aggregate([
        //avgStudentCL
        {
          $match: {
            dateStart: {
              $gte: moment().startOf("month").subtract(1, "months").toDate(),
              $lte: moment().endOf("month").subtract(1, "months").toDate(),
            },
          },
        },
        {
          $group: {
            _id: null,
            avg: { $avg: { $size: "$studentId" } },
          },
        },
      ]),
      transactionModel.aggregate([
        // avgIncomeCL
        {
          $match: {
            type: 2,
            time: {
              $gte: moment().startOf("month").subtract(1, "months").toDate(),
              $lte: moment().endOf("month").subtract(1, "months").toDate(),
            },
          },
        },
        {
          $group: {
            _id: "$courseId",
            avg: { $avg: "$value" },
          },
        },
      ]),
      courseModel.aggregate([
        //avgCourseTL
        {
          $match: {
            dateStart: {
              $gte: moment().startOf("month").subtract(1, "months").toDate(),
              $lte: moment().endOf("month").subtract(1, "months").toDate(),
            },
          },
        },
        {
          $group: {
            _id: "$teacherId",
            count: { $count: {} },
          },
        },
        {
          $group: {
            _id: null,
            avg: { $avg: "$count" },
          },
        },
      ]),
      transactionModel.aggregate([
        // avgIncomeTL
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "users",
          },
        },
        {
          $unwind: "$users",
        },
        {
          $match: {
            "users.typeuserId": 1,
            time: {
              $gte: moment().startOf("month").subtract(1, "months").toDate(),
              $lte: moment().endOf("month").subtract(1, "months").toDate(),
            },
          },
        },
        {
          $group: {
            _id: "$userId",
            avg: { $avg: "$value" },
          },
        },
      ]),
    ]);
  }

  async getPieChart() {
    return await Promise.all([
      courseModel.aggregate([
        // subjectChart
        {
          $group: {
            _id: "$subject",
            count: { $count: {} },
          },
        },
      ]),
      teacherModel.aggregate([
        // teacherChart
        {
          $group: {
            _id: "$degree",
            count: { $count: {} },
          },
        },
      ]),
    ]);
  }
}

module.exports = new StatisticController();
