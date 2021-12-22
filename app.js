const express = require("express"),
  app = express(),
  port = 8000,
  exhbs = require("express-handlebars"),
  session = require("express-session");

// app use
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "hKQj5LvOzFsEVAzX2dhS7ZToiHDGZ4Rn",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3600 * 12 },
  })
);
//

// template engine
app.set("views", "./public/app/views");
const hbs = exhbs.create({
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

const { listen } = require("express/lib/application");
// route
const route = require("./app/routes");
app.use(route);

// app listen
app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
