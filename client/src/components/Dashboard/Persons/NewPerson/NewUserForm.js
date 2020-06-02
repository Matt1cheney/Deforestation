import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      regions: [],
      loading: false,
      region: null,
      name: "",
      email: "",
      phone: "",
      role: "",
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    API.getRegions().then((data) => {
      this.setState({ regions: data.data, loading: false });
    });
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

  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      alert("Looks like you forgot one!");
      return;
    }

    try {
      await API.createPerson(this.state);

      if(this.state.role === "Volunteer") {
        alert("Volunteer Created");
      } else {
        alert("Land Owner Created");
      } 
      
      this.props.history.goBack();
    } catch (err) {
      console.log(err.message);
    }

  };

  render() {
    return (
      <Form className="formContainer" onSubmit={this.handleSubmit}>
        <h1>Add New Volunteer/Land Owner</h1>
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

            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Region</Form.Label>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="region"
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
              <Button
                variant="primary"
                className="btn float-right"
                type="submit"
              >
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
    );
  }
}

export default UserForm;
