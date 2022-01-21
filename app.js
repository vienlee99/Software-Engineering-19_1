const express = require("express"),
  app = express(),
  port = 8000,
  session = require("express-session");

// methodOveride
const methodOverride = require('method-override');

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

//use method Overide
app.use(methodOverride('_method'));

// config
app.set("views", "./public/app/views");
require("./app/config/templateEngine.config")(app);
require("./app/config/database.config").run();
require("./app/middleware/passport")(app);


// route
const route = require("./app/routes");
app.use(route);



// app listen
app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});



// Thêm bảng giao dịch
// TID
// Loại
// Số tiền
// UserID
