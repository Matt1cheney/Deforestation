import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../style.css";


const Volunteer = () => {
  return (
    <Container className="volunteerForm">
      <Form>
        <Form.Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="Enter first name" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Enter last name" />
          </Col>
        </Form.Row>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default Volunteer;