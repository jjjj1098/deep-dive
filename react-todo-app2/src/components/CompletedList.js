// components/CompletedList.js
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5001/api/todos';

function CompletedList() {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const completed = data.filter(todo => todo.completed);
        setCompletedTodos(completed);
      });
  }, []);

  return (
    <div>
      <h2>완료된 할 일 목록</h2>
      <ul>
        {completedTodos.map(todo => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedList;
