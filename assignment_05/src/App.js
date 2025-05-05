import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const FormPage = lazy(() => import('./pages/FormPage'));

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/"> TuteDude </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/form">Form</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
