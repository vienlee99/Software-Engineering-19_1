const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
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
    maxlength: 45,
  },
  remainningBalance: {
    type: Number,
    default: 0,
  },
  imagePath: {
    type: String,
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
