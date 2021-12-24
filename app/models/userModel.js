const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    maxlength: 45,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 45,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
  },
  typeuserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "typeusers",
    required: true,
  },
  // remainningBalance: {
  //   type: Number,
  //   default: 0,
  // },
  // imagePath: {
  //   type: String,
  // },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
