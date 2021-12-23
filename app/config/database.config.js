const TypeUser = require("../models/typeUserModel");
const mongoose = require("mongoose");

const userModel = require('../models/userModel')

module.exports = () => {
  (async function connect() {
    try {
      await mongoose.connect("mongodb://localhost:27017/HTVcorpDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

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
