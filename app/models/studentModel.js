const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
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
  phoneNum: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  address: {
    type: String,
    maxlength: 45,
    trim: true,
  },
  courseId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
