import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import API from "../../../utils/API"
import "../style.css";

export default class Volunteer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      region: ""
    };
  }

  // componentDidMount() {
  //   const { region } = this.props
  //   this.setState({ region })
  // }

  onNameChange(event) {
    this.setState({ region: this.props.region })
    this.setState({ name: event.target.value });
    console.log(this.state)
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    //add volunteer to event doc with evnt id push volunteer object into existing array + 

    API.createPerson(this.state).then((res) => {
      console.log(res.data)
      const obj = {
        userId: res.data._id,
        eventId: this.props.event
      }
      console.log(obj)
      API.updateEventVolunteer(obj).then(res => console.log(res))
    }).catch(err => console.log(err))
    // fetch("/api/persons", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => console.log(response.json()))
    //   .then((response) => {
    //     if (response.status === "success") {
    //       alert("Message Sent.");
    //       this.resetForm();
    //     } else if (response.status === "fail") {
    //       alert("Message failed to send.");
    //     }
    //   })
    //   .catch((err) => console.log(err.message));

    this.setState({
      ...this.state,
      name: "",
      email: "",
      phone: "",
      region: "",
      event: ""
    })
  }

  render() {
    return (
      <Container className="volunteerForm">
        <h3>{this.props.event}</h3>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Row>
            <Col>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                placeholder="Enter full name"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </Col>
            <Col>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                placeholder="Enter phone number"
                value={this.state.phone}
                onChange={this.onPhoneChange.bind(this)}
              />
            </Col>
          </Form.Row>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
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
      </Container>
    );
  }
}
