import './App.css'
import { useState, useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import Lists from './components/Lists';
import Form from './components/Form';

const API_URL = 'http://localhost:5001/api/todos';

function Completed({ todoData }) {
  const navigate = useNavigate();
  const completedTodos = todoData.filter(todo => todo.completed);

  return (
    <div>
      <div className="mb-3">
        <button 
          className="px-4 py-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-100"
          onClick={() => navigate('/')}
        >
          &larr; 홈으로
        </button>
      </div>

      <h2>완료된 할 일 목록</h2>
      <Lists todoData={completedTodos} setTodoData={() => {}} handleClick={() => {}} />
    </div>
  )
}

function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTodoData(data))
      .catch(err => console.error('Failed to fetch todos:', err));
  }, []);

  const handleClick = useCallback((_id) => {
    fetch(`${API_URL}/${_id}`, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to delete');
      setTodoData((prev) => prev.filter(todo => todo._id !== _id));
    })
    .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: value })
    })
    .then(res => res.json())
    .then(newTodo => {
      setTodoData((prev) => [...prev, newTodo]);
      setValue("");
    })
    .catch(err => console.error(err));
  }

  const handleRemoveClick = () => {
    fetch(API_URL, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) throw new Error('삭제 실패');
      return res.json();
    })
    .then(() => setTodoData([]))
    .catch(err => console.error('전체 삭제 실패:', err));
  }

  return (
    <Router>
      <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
        <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
          <Routes>
            <Route path="/" element={
              <>
                <div className='flex justify-between mb-3'>
                  <h1>할 일 목록</h1>
                  <div>
                    <button onClick={handleRemoveClick} className="mr-4">Delete All</button>
                    <Link 
                      to="/completed" 
                      style={{
                        color: 'inherit',  // 글자색 그대로
                        textDecoration: 'none',  // 밑줄 제거
                        marginLeft: '8px',
                        padding: '6px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        backgroundColor: '#f0f0f0',
                        cursor: 'pointer',
                        fontSize: '14px',
                      }}
                    >
                      완료된 목록
                    </Link>

                  </div>
                </div>
                <Lists 
                  handleClick={handleClick}
                  todoData={todoData}
                  setTodoData={setTodoData}
                />
                <Form 
                  handleSubmit={handleSubmit}
                  value={value}
                  setValue={setValue}
                />
              </>
            } />

            <Route path="/completed" element={
              <Completed todoData={todoData} />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
