import React, { setFormState, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import app from "../../../authComponents/userAuth/baseauth";

class PersonForm extends React.Component {
  // const availableRegions = regions.filter((data) => {
  //   return data.coordinator === null;
  // })
  constructor(props) {
    super(props);
    this.regions = [];
    this.state = {
      region: null,
      name: "",
      email: "",
      firebaseUid: "",
      phone: "",
      role: "",
      password: "",
    };
  }

  componentWillMount() {
    API.getRegions().then((data) => this.setState((this.regions = data.data)));
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
//  grabbing values from form and inputting into state
  handleSubmit = async (event) => {
    event.preventDefault();
// if name or email is missing send alert and return
    if (this.state.name === "" || this.state.email === "") {
      alert("Looks like you forgot one!");
      return;
    }
    try {
// create a user within firebase, then finally grab the UID that firebase provides and input into the for state.
      await app
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
    } catch (error) {
      alert(error);
    } finally {
      this.setState({ firebaseUid: app.auth().currentUser.uid });
    }
// create the user with all the needed info to Mongo
    API.createPerson(this.state)
      .then(() => alert("Admin Created"))
      .catch((err) => alert(err.message));
// return setState to null.
    this.setState({
      region: null,
      name: "",
      email: "",
      firebaseUid: "",
      phone: "",
      role: "",
      password: "",
    });
  };

  render() {
    return (
      <>
        <Form
          className="formContainer"
          onSubmit={this.handleSubmit}
        >
          <h1>New Admin or Coordinator</h1>
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
              {this.regions.map((region, index) => (
                <option key={index} value={region._id}>
                  {region.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
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
        </Form>
      </>
    );
  }
}

export default PersonForm;
