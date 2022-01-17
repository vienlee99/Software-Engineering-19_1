const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 45,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 61,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
  },
  mobilephone: {
    type: String,
    required: true,
    maxlength: 11,
    trim: true,
  },
  typeuserId: {
    type: Number,
    required: true,
  },
  remainningBalance: {
    type: Number,
    default: 0,
  },
  imagePath: {
    type: String,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
