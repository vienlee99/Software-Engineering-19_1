const courseModel = require("../../models/courseModel");
const userModel = require("../../models/userModel");
const transactionModel = require("../../models/TransactionModel");
const teacherModel = require("../../models/teacherModel");

class SearchController {
  index(req, res) {
    res.render("admin/search", {
      layout: "admin/layout1",
      path: "/search",
      where: "search",
    });
  }

  async search(req, res) {
    console.log(req.body);
    let { type, query, page, order, filter } = req.body;
    type = type || "teacher";
    query = query || "";
    order = order || "1";
    page = page || "1";
    if (typeof filter == "object") filter = filter.join("|");
    else if (typeof filter == "undefined") filter = `.*`;

    console.log(type, query, page, order, filter);
    if (type == "teacher") {
      let orderType = {
        1: { name: 1 },
        "-1": { name: -1 },
        2: { rating: 1 },
        "-2": { rating: -1 },
        3: { degree: 1 },
        "-3": { degree: -1 },
        4: { "userId.status": 1 },
        "-4": { "userId.status": -1 },
      };
      let result = await teacherModel
        .find({
          name: { $regex: query, $options: "i" },
          degree: new RegExp(filter),
        })
        .populate("userId")
        .sort(orderType[order])
        .limit(8)
        .skip(8 * page-8);
      // console.log(result);
      res.send(result);
    } else if (type == "course") {
      let orderType = {
        1: { name: 1 },
        "-1": { name: -1 },
        2: { rating: 1 },
        "-2": { rating: -1 },
        3: { status: 1 },
        "-3": { status: -1 },
        4: { dateStart: 1 },
        "-4": { dateStart: -1 },
      };
      let result = await courseModel
        .find({
          name: { $regex: query, $options: "i" },
          subject: new RegExp(filter),
        })
        .populate({ path: "teacherId", populate: { path: "userId" } })
        .sort(orderType[order])
        .limit(8)
        .skip(8 * page-8);
      // console.log(result);
      res.send(result);
    } else res.send("fail");
  }
}

module.exports = new SearchController();
