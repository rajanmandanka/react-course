import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { TodoProvider } from './context/TodoContext';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoProvider>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>React To-Do Context App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <InputTodo />
        <TodoList />
      </Container>
    </TodoProvider>
  );
};

export default App;
