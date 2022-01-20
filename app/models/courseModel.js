const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true,},
  teacher: { type: String, required: true,},
  // subject: {type: String, required: true, maxlength: 45,},
  // cost: {type: Number, required: true,},
  dateStart: {type: Date, required: true,},
  dateEnd: {type: Date, required: true,},
  date: {type: String, required: true,},
  // numberOfStudent: {type: Number, required: true,},
  // deadDateEnroll: {type: Date, required: true,},
  description: { type: String, required: true,},
  slug: { type: String, slug: 'name', unique: true },

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
