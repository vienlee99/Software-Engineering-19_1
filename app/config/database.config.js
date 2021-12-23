const TypeUser = require("../models/typeUserModel");

const typeUserMap = {};

TypeUser.find({}, function (err, typeUsers) {
  typeUsers.forEach(function (typeUser) {
    typeUserMap[typeUser.name] = typeUser._id;
  });
});
