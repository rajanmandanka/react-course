import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') {
      setError('Task title cannot be empty');
      return;
    }

    setTodos([...todos, trimmedTitle]);
    setTitle('');
    setError('');
  };

  return (
    <div>
      <h1>To-Do App</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add</button>

      {error && <p>{error}</p>}

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
