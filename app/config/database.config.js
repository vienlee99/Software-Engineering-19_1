const TypeUser = require("../models/typeUserModel");
const mongoose = require("mongoose");

module.exports = () => {
  (async function connect() {
    try {
      await mongoose.connect("mongodb://localhost:27017/testdbs", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("success!");
    } catch (error) {
      console.log("fail!");
    }
  })();

  const typeUserMap = {};

  TypeUser.find({}, function (err, typeUsers) {
    typeUsers.forEach(function (typeUser) {
      typeUserMap[typeUser.name] = typeUser._id;
    });
  });
};
