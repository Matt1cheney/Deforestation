import React, { useContext } from "react";
import app from "../userAuth/baseAuth";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";
import { AuthContext } from "../userAuth/Auth";

const Login = () => {
  const history = useHistory();
// grabs values from the login form below and then sends a login request to Firebase.
  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .catch((err) => {
          if (!email.value) return console.log("please enter your email");
          if (!password.value) return console.log("please enter your password");
          return console.log(
            "error code ",
            err.code,
            " error message ",
            err.message
          );
        });
    } catch (error) {
      alert(error);
    }

  };
  // uses the currentUser context (from auth.js file) 
  const { currentUser } = useContext(AuthContext);
  // if user is logged in, take them to the dashboard
  if (currentUser) {
    history.push("dashboard/home");
  }

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
          <Form.Group
            as={Col}
            xs={12}
            md={5}
            lg={4}
            controlId="formBasicPassword"
          >
            <Form.Label className="loginText">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Button variant="dark" className="btn" type="submit">
            Submit
          </Button>
        </Form.Row>
      </Form>
    </Container>
  );
};
export default Login;
