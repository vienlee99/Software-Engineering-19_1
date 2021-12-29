const mongoose = require("mongoose");
var AutoIncrement = require('mongoose-sequence')(mongoose);

const TeacherSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 45,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  phoneNum: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  numIdCard: {
    type: String,
    required: true,
    maxlength: 45,
    validate: (numId) => {
      return numId && (numId.length === 16 || numId.length === 19);
    },
  },
  address: {
    type: String,
    maxlength: 45,
    trim: true,
  },
  degree: {
    type: Number,
  },
  courseId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

TeacherSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: '_id'});
const TeacherModel = mongoose.model("Teacher", TeacherSchema);

module.exports = TeacherModel;
