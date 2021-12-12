const route = require("express").Router(),
  signupController = require("../controllers/signupController");

route.get("/", (req, res) => {
  signupController.index(req, res);
});
route.post("/", (req, res) => {
  if (signupController.login(req, res)) {
    res.redirect("../");
  } else {
    res.redirect("/");
  }
});

module.exports = route;
