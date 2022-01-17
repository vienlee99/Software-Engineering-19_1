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

