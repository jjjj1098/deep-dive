const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET 모든 할 일
router.get('/', async (req, res) => {
  const todos = await Todo.find().sort({ order: 1 });
  res.json(todos);
});

// POST 새로운 할 일 추가
router.post('/', async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  const saved = await newTodo.save();
  res.json(saved);
});

//PUT 완료 상태 변경
router.put('/order', async (req, res) => {
  const { todos } = req.body; // [{_id, order}, {_id, order}, ...] 형식으로 받음

  try {
    const updatePromises = todos.map(todo =>
      Todo.findByIdAndUpdate(todo._id, { order: todo.order }, { new: true })
    );

    const updatedTodos = await Promise.all(updatePromises);

    res.json(updatedTodos);
  } catch (err) {
    res.status(500).json({ message: '순서 업데이트 실패', error: err });
  }
});
// routes/todos.js (추가)
// PUT /api/todos/order - 여러 할 일의 순서 업데이트
// PUT /:id - 완료 상태 변경 및 수정 (예: completed, text)
router.put('/:id', async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      { 
        completed: req.body.completed !== undefined ? req.body.completed : undefined,
        text: req.body.text !== undefined ? req.body.text : undefined,
      },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Todo not found' });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '서버 에러' });
  }
});





// DELETE 할 일 삭제
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: '삭제됨' });
});
// server/routes/todos.js

// DELETE 전체 삭제
router.delete('/', async (req, res) => {
  try {
    await Todo.deleteMany({});
    res.json({ message: '전체 삭제 완료' });
  } catch (err) {
    res.status(500).json({ message: '전체 삭제 실패', error: err });
  }
});


module.exports = router;
