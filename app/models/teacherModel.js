const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 45,
    trim: true,
  },
  age: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  numIdCard: {
    type: String,
    maxlength: 45,
    validate: (numId) => {
      return numId && (numId.length === 16 || numId.length === 19);
    },
  },
  address: {
    type: String,
    maxlength: 100,
    trim: true,
  },
  degree: {
    type: String,
    maxlength: 60,
    trim: true,
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

const TeacherModel = mongoose.model("Teacher", TeacherSchema);

module.exports = TeacherModel;
