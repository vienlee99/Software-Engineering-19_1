const route = require("express").Router(),
  signinController = require("../controllers/signinController");

route.get("/", (req, res) => {
  signinController.index(req, res);
});
route.post("/", (req, res) => {
  if (signinController.login(req, res)) {
    res.redirect("../");
  } else {
    res.redirect("/");
  }
});

module.exports = route;
