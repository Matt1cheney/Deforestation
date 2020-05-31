import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class UserForm extends React.Component {
  constructor() {
    super();
    this.regions = [];
    this.state = {
      region: null,
      name: "",
      email: "",
      phone: "",
      role: "",
    };
  }

  componentWillMount() {
    API.getRegions().then((data) => this.setState((this.regions = data.data)));
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "none") {
      this.setState({
        [name]: null,
      });
      return;
    }

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      alert("Looks like you forgot one!");
      return;
    }

    API.createPerson(this.state).then((data) => (this.regions = data.data));

    this.setState({
      region: null,
      name: "",
      email: "",
      phone: "",
      role: "",
    });
  };

  // console.log(formState)

  render() {
    return (
      <Form className="formContainer" onSubmit={this.handleSubmit}>
        <h1>New Person</h1>
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
                label="Land Owner"
                type={type}
                id={`inline-${type}-Admin`}
                name="role"
                value="LandOwner"
                onChange={this.handleChange}
              />
              <Form.Check
                inline
                label="Volunteer"
                type={type}
                id={`inline-${type}-Admin`}
                name="role"
                value="Volunteer"
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
    );
  }
}

export default UserForm;
