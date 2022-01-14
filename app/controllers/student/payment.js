class StudentPaymentController {
  index(req, res) {
    res.render("student/payment", {
      layout: "student/layout1",
      path: "/payment",
    });
  }
}

module.exports = new StudentPaymentController();
