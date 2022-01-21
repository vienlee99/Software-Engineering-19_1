const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  type: {
    type: Number, // 0-nạp tiền   1-rút tiền    2-thanh toán tiền   3-nhận tiền
    required: true,
  },
  time: {
    type: Date,
    required: true,
    default: Date.now(),
  },
},{ strict: false });

const TransactionModel = mongoose.model("Transaction", TransactionSchema);

module.exports = TransactionModel;
