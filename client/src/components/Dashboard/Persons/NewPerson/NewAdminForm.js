import React, { setFormState, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import app from "../../../authComponents/userAuth/baseauth";
import Spinner from "react-bootstrap/Spinner";

class PersonForm extends React.Component {
  // const availableRegions = regions.filter((data) => {
  //   return data.coordinator === null;
  // })
  constructor(props) {
    super(props);
    this.regions = [];
    this.state = {
      regions: [],
      loading: false,
      region: null,
      name: "",
      email: "",
      phone: "",
      role: "",
      password: "",
    };
  }

  componentWillMount() {this.setState({ loading: true });
    API.getRegions().then((data) => {
      this.setState({ regions: data.data, loading: false });
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "none") {
      this.setState({
        name: null,
      });
      return;
    }

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async(event) => {
    event.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      alert("Looks like you forgot one!");
      return;
    }

    if (this.state.password !== this.state.confirm) {
      alert("Password and Confirm password not matched");
      return;
    }

    try {
      await API.createPerson(this.state);

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password);
        await app.auth().currentUser.updateProfile({
          displayName: this.state.name,
          phoneNumber: this.state.phone,
        });

        if(this.state.role === "Coordinator") {
          alert("Coordinator Created");
        } else {
          alert("Admin Created");
        }
        this.props.history.goBack();
      } catch (error) {
        alert(error);
      }    

    } catch (err) {
      console.log(err.message);
    }

  };


  // handleSignUp /*useCallback(*/ = async (event) => {
  //   event.preventDefault();
  //   const { email, password, name, phone } = event.target.elements;
  //   try {
  //     await app
  //       .auth()
  //       .createUserWithEmailAndPassword(email.value, password.value);
  //     await app.auth().currentUser.updateProfile({
  //       displayName: name.value,
  //       phoneNumber: phone.value,
  //     });
  //     this.props.history.goBack();
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  render() {
    return (
      <>
        <Form
          className="formContainer"
          onSubmit={this.handleSubmit}
        >
          <h1>New Admin or Coordinator</h1>
        {!this.state.loading ? (
          <div>
          <Form.Row>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Region</Form.Label>
            <Form.Control
              as="select"
              onChange={this.handleChange}
              name="region"
              custom
            >
              <option>none</option>
              {this.state.regions.map((region, index) => (
                <option key={index} value={region._id}>
                  {region.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Label>Person Type</Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3" value>
                <Form.Check
                  inline
                  label="Coordinator"
                  type={type}
                  id={`inline-${type}-Coordinator`}
                  name="role"
                  value="Coordinator"
                  onChange={this.handleChange}
                />
                <Form.Check
                  inline
                  label="Admin"
                  type={type}
                  id={`inline-${type}-Admin`}
                  name="role"
                  value="Admin"
                  onChange={this.handleChange}
                />
              </div>
            ))}
          </Form.Group>

          <Form.Group
            controlId="formDescription"
            style={{ height: 30, marginTop: 22 }}
          >
            <Button variant="primary" className="btn float-right" type="submit">
              Submit
            </Button>
          </Form.Group>
          </div>
        ) : (
          <Row>
            <Col sm={12} className="text-center">
              <Spinner animation="border" role="status" variant="dark">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        )}
        </Form>
      </>
    );
  }
}

export default PersonForm;
