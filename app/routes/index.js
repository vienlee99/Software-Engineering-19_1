const welcome = require("./welcome"),
  signin = require("./signin"),
  signup = require("./signup"),
  admin = require("./admin"),
  student = require("./student"),
  teacher = require("./teacher");

function route(app) {
  if (!req.session.user) {
    // anonymous user
    app.use("/", welcome);
    app.use("/signin", signin);
    app.use("/signup", signup);
  } else {
    // loged-in
    app.use("/.*", function (req, res, next) {
      switch (req.session.user.usertype) {
        case "admin":
          app.use(admin);
          break;
        case "student":
          app.use(student);
          break;
        case "teacher":
          app.use(teacher);
          break;
        default:
          break;
      }
    });
  }
}

module.exports = route;
