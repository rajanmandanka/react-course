import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const FormPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email format';

    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div>
      <h2>Form Page</h2>
      {submitted && <Alert variant="success">Form submitted successfully!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default FormPage;
