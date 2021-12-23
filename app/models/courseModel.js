const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 45,
  },
  cost: {
    type: Number,
    required: true
  },
  dateStart: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  dateEnd: {
    type: Date,
    required: true
  },
  numberOfStudent: {
    type: Number,
    required: true
  },
  deadDateEnroll: {
    type: Date,
    required: true
  },
});

const CourseModel = mongoose.model('Course', CourseSchema);

module.exports = CourseModel;