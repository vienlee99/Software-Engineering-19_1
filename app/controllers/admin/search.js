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
    let { type, query, page, order, filter } = req.body;
    type = type || "teacher";
    query = query || "";
    order = order || "1";
    filter = filter || "/.*/";
    page = page || "1";
    if (type == "teacher") {
      let orderType = {
        1: { name: 1 },
        "-1": { name: -1 },
        2: { rating: 2 },
        "-2": { rating: -2 },
        3: { degree: 3 },
        "-3": { degree: -3 },
        4: { "user.status": 4 },
        "-4": { "user.status": -4 },
      };
      let result = teacherModel
        .find({
          name: { $regex: query, $options: "i" },
          degree: filter,
        })
        .sort(orderType[order]);
      res.send(result);
    } else if (type == "course") {
    } else res.send("fail");
  }
}

module.exports = new SearchController();
