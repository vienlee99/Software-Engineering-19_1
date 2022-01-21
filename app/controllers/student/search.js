const coursesModel = require("../../models/courseModel");

class StudentSearch {
  async index(req, res) {
    let keyword = req.query.q;
    let a = await coursesModel.find({
      name: { $regex: keyword, $options: "i" },
    }).lean();
    a = a.map((x) => {
      x._id = x._id.toString();
      return x;
    });

    let msg = "";
    if (a.length == 0) {
      msg = "Không tìm thấy khóa học theo yêu cầu!";
    }
    console.log(a);
    res.render("student/search", {
      layout: "student/layout1",
      course: a,
      msg: msg,
      path: "/search",
      keyword:keyword,
      nRs:a.length,
    });
  }
}

module.exports = new StudentSearch();
