const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    required: true,
    default: 0  // 기본값은 0으로 지정 (새 할 일은 맨 아래로)
  }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);
