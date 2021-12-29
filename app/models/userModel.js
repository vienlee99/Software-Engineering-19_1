const mongoose = require("mongoose");
var AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new mongoose.Schema({
  _id: {
    type: Number,
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
});

UserSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: '_id'});
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
