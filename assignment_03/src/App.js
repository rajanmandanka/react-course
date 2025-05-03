import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Navbar,
} from 'react-bootstrap';

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

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      {/* Navbar Heading */}
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>React To-Do App</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Container */}
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form.Group className="d-flex mb-3">
              <Form.Control
                type="text"
                placeholder="Enter a task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button variant="primary" className="ms-2" onClick={handleAddTodo}>
                Add
              </Button>
            </Form.Group>

            {error && <p className="text-danger">{error}</p>}

            {/* List of Todos */}
            <ListGroup>
              {todos.map((todo, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  {todo}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
