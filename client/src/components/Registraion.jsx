import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [form , setForm] = useState({});
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:4001/empolyee/addUser/", form)
      .then((response) => {
        setForm(response.form);
        navigate('/')
      })
      .catch((error) => console.log("Error fetching data:", error));
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-50 p-4 border rounded shadow-lg">
        <h2 className="text-center mb-4">Registration Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={form.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, phoneNumber: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="street-address">Street Address</Form.Label>
            <Form.Control
              type="text"
              id="street-address"
              placeholder="123 Main St"
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="city">City</Form.Label>
            <Form.Control
              type="text"
              id="city"
              placeholder="City"
              required
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="state">State/Province/Region</Form.Label>
            <Form.Control
              type="text"
              id="state"
              placeholder="State"
              required
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="country">Country</Form.Label>
            <Form.Control
              type="text"
              id="country"
              placeholder="Country"
              required
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />
          </Form.Group>

          <Button type="submit" className="btn btn-primary w-100"> Submit  </Button>
          
        </Form>
      </div>
    </Container>
  );
};

export default Registration;
