const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 45,
  },
  subject: {
    type: String,
    required: true,   
    maxlength: 45,
  },
  cost: {
    type: Number,
    required: true,
  },
  dateStart: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
  numberOfStudent: {
    type: Number,
    required: true,
  },
  deadDateEnroll: {
    type: Date,
    required: true,
  },

  studentId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "teachers",
  }],
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
  },
});

const CourseModel = mongoose.model("Course", CourseSchema);

module.exports = CourseModel;
