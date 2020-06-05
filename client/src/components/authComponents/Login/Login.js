
import React, { useCallback } from "react";
import app from "../userAuth/baseauth";
// import { AuthContext } from "../userAuth/Auth";
import { withRouter } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <Container className="parent">
      <Form onSubmit={handleLogin}>
        <h3 className="centerMe loginText">Sign in to continue.</h3>
        <Form.Row className="justify-content-center">
          <Form.Group as={Col} xs={12} md={5} lg={4} controlId="formBasicEmail">
            <Form.Label className="loginText">Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-center">
          <Form.Group as={Col} xs={12} md={5} lg={4} controlId="formBasicPassword">
            <Form.Label className="loginText">Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>
        <Form.Row className="justify-content-center">
        <Button variant="dark" className="btn" type="submit">
          Submit
  </Button>
        </Form.Row>
      </Form>
    </Container>
  )
};

export default withRouter(Login);