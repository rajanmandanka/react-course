import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';

const InputTodo = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleAdd = () => {
    if (title.trim() === '') return;
    addTodo(title.trim());
    setTitle('');
  };

  return (
    <Form className="d-flex mb-3">
      <Form.Control
        type="text"
        placeholder="Enter a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleAdd} className="ms-2">
        Add
      </Button>
    </Form>
  );
};

export default InputTodo;
