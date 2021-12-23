const exhbs = require("express-handlebars");

module.exports = (app) => {
  var hbs = exhbs.create({
    defaultLayout: "main-layout",
    extname: "hbs",
    helpers: {
      ifStr(s1, s2, options) {
        return s1 == s2 ? options.fn(this) : options.inverse(this);
      },
    },
  });
  app.engine("hbs", hbs.engine);
  app.set("view engine", "hbs");
};
