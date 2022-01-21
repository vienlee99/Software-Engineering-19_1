const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const CourseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    teacher: { type: String, required: true },
    subject: { type: String, maxlength: 45 },
    cost: { type: Number },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    date: { type: String, required: true },
    numberOfStudent: { type: Number },
    deadDateEnroll: { type: Date },
    rating: { type: Number },
    status: { type: Boolean, default: true },
    description: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
    imagePath: { type: String },

    studentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
  },
  { strict: false }
);

const CourseModel = mongoose.model("Course", CourseSchema);

module.exports = CourseModel;
