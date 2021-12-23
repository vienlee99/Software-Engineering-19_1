const mongoose = require("mongoose");

const TypeUserSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 45,
  },
  userId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  }],
});

const TypeUserModel = mongoose.model("TypeUser", TypeUserSchema);

module.exports = TypeUserModel;
