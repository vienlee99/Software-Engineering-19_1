const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 45,
    trim: true,
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
    maxlength: 45,
    trim: true,
  },
  courseId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
},{ strict: false });

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;

