import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import API from "../../../../utils/API";
import Select from "react-select";

class RegionForm extends React.Component {
  constructor(props) {
    super(props);
    this.coordinators = [];
    this.coordinators_option = [];
    this.state = {
      loader: false,
      name: "",
      coordinator: "",
      description: "",
    };
  }

  componentWillMount() {

    if(this.props.location.region === undefined) 
    {
      this.props.history.push('/dashboard/regions');
    }
    else if(this.props.location.region && this.props.location.region._id === undefined) 
    {
      this.props.history.push('/dashboard/regions');
    } 
    else 
    {
      this.setState({
        loader: true,
        _id: this.props.location.region._id,
        name: this.props.location.region.name,
        coordinator:
          this.props.location.region.coordinator &&
          this.props.location.region.coordinator._id
            ? this.props.location.region.coordinator._id
            : null,
        description: this.props.location.region.description,
      });
      API.getPersons().then((data) => {
        this.setState(
          (this.coordinators = data.data.filter((data) => {
            return data.role.toLowerCase() === "coordinator";
          }))
        );
        this.setState({ loader: false });
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSelectChange = (data) => {
    if (data.id !== "") {
      this.setState({
        coordinator: data.value,
      });
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (
      this.state.name === "" ||
      this.state.coordinator === "" ||
      this.state.description === ""
    ) {
      alert("Looks like you forgot one!");
      return;
    }

    try {
      await API.updateRegion(this.state);
      alert("Region Updated");
      this.props.history.goBack();
    } catch (err) {
      console.log(err.message);
    }

    this.setState({
      name: "",
      coordinator: "",
      description: "",
    });
  };

  render() {
    let coordinators_option = this.coordinators.map((value) => {
      return {
        label: value.name,
        value: value._id,
      };
    });

    return (
      <div className="formContainer">
        <Form onSubmit={this.handleSubmit}>
          <h1>Update Region</h1>
          {!this.state.loader ? (
            <>
              <Form.Group controlId="formRegion">
                <Form.Label>Region Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter region name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formCoordinator">
                <Form.Label>Coordinator</Form.Label>
                <Select
                  name="coordinator"
                  placeholder="Select Coordinator"
                  options={coordinators_option}
                  value={coordinators_option.filter(
                    ({ value }) => value === this.state.coordinator
                  )}
                  onChange={this.handleSelectChange}
                />
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Enter brief description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formDescription"
                style={{ height: 30, marginTop: 22 }}
              >
                <Button
                  variant="dark"
                  className="btn float-right"
                  type="submit"
                >
                  Submit
                </Button>
              </Form.Group>
            </>
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
      </div>
    );
  }
}

export default RegionForm;

