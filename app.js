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
const hbs = exhbs.create({
  defaultLayout: "main-layout",
  extname: "hbs",
});
app.engine("hbs", hbs.engine);
npm;
app.set("view engine", "hbs");
app.set("views", "./views");

const { listen } = require("express/lib/application");
// route
const route = require("./routes");
route(app);

// app listen
app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
