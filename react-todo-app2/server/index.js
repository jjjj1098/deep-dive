// server/index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

const cors = require('cors');
app.use(cors());

// 미들웨어 - JSON 요청 처리
app.use(express.json());

// 기본 라우트 (테스트용)
app.get('/', (req, res) => {
  res.send('Todo API is running...');
});

// 라우터 연결 (routes/todos.js가 있다고 가정)
const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

// 몽고디비 연결 및 서버 실행
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected!');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
