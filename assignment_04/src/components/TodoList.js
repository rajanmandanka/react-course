import React, { useContext, useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, deleteTodo, clearTodos } = useContext(TodoContext);
  const [search, setSearch] = useState('');

  const filtered = todos.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Form.Control
        placeholder="Search tasks"
        className="mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ListGroup>
        {filtered.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between"
          >
            {todo.title}
            <Button size="sm" variant="danger" onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {todos.length > 0 && (
        <Button className="mt-3" variant="outline-danger" onClick={clearTodos}>
          Clear All
        </Button>
      )}
    </>
  );
};

export default TodoList;
