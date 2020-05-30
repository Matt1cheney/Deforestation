import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import API from "../../../../utils/API";

class SiteForm extends React.Component {
  constructor() {
    super();
    this.owners = [];
    this.coordinators = [];
    this.persons = [];
    this.regions = [];
    this.states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ];
    this.state = {
      name: "",
      region: null,
      owner: null,
      street: "",
      latitude: "",
      state: "",
      longitude: "",
      status: "",
      coordinator: null,
      plantingTarget: "",
      notes: ""
    };
  }

  async componentWillMount() {
    API.getPersons().then((data) => {
      this.setState(
        (this.coordinators = data.data.filter((data) => {
          return data.role.toLowerCase() === "coordinator";
        }))
      );
      this.setState(
        (this.owners = data.data.filter((data) => {
          return data.role.toLowerCase() === "landowner";
        }))
      );
    });

    API.getRegions().then((data) => this.setState((this.regions = data.data)));
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "none") {
      this.setFormState({
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

    if (
      this.state.street === "" ||
      this.state.latitude === "" ||
      this.state.longitude === "" ||
      this.state.region === null ||
      this.state.coordinator === null ||
      this.state.name === "" ||
      this.state.plantingTarget === ""
    ) {
      alert("Looks like you forgot one!");
      return;
    }

    let siteData = {
      name: this.state.name,
      region: this.state.region,
      owner: this.state.owner,
      address: this.state.street,
      status: this.state.status,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      coordinator: this.state.coordinator,
      plantingTarget: this.state.plantingTarget
    };

    try {
      await API.createSite(siteData);
      alert("Site Added");
      this.props.history.goBack();
    } catch (err) {
      alert(err.message);
    }

    this.setState({
      name: "",
      region: null,
      owner: null,
      street: "",
      latitude: "",
      state: "",
      zip: "",
      status: "",
      coordinator: null,
      plantingTarget: "",
      notes: ""
    });
  };

  render() {
    return (
      <Form className="formContainer" onSubmit={this.handleSubmit}>
        <h1>New Site</h1>
        <Form.Row>
          <Form.Group as={Col} xs={12} md={4} controlId="formSiteName">
            <Form.Label>Site Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={4} controlId="formRegion">
            <Form.Label>Region</Form.Label>
            <Form.Control
              as="select"
              name="region"
              onChange={this.handleChange}
            >
              <option>none</option>
              {this.regions.map((region, index) => (
                <option key={index} value={region._id}>
                  {region.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={4} controlId="formSiteOwner">
            <Form.Label>Owner</Form.Label>
            <Form.Control as="select" name="owner" onChange={this.handleChange}>
              <option>none</option>
              {this.owners.map((owner, index) => (
                <option key={index} value={owner._id}>
                  {owner.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="1234 Main St"
            name="street"
            onChange={this.handleChange}
            value={this.state.street}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} xs={12} md={4} controlId="formGridCity">
            <Form.Label>Planting Target</Form.Label>
            <Form.Control
              type="text"
              name="plantingTarget"
              onChange={this.handleChange}
              value={this.state.plantingTarget}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={4} controlId="formGridCity">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="text"
              name="latitude"
              onChange={this.handleChange}
              value={this.state.latitude}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={4} controlId="formGridZip">
            <Form.Label>longitude</Form.Label>
            <Form.Control
              type="text"
              name="longitude"
              onChange={this.handleChange}
              value={this.state.longitude}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} xs={12} md={6} controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              onChange={this.handleChange}
            >
              <option>none</option>
              <option>Pending</option>
              <option>Active</option>
              <option>Inactive</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId="formCoordinator">
            <Form.Label>Coordinator</Form.Label>
            <Form.Control
              as="select"
              name="coordinator"
              onChange={this.handleChange}
            >
              <option>none</option>
              {this.coordinators.map((person, index) => (
                <option key={index} value={person._id}>
                  {person.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.File
            id="profileImageSiteForm"
            label="Profile Image"
            custom
            name=""
          />
        </Form.Group>
        <Form.Group>
          <Form.File id="contractSiteForm" label="Contract" custom name="" />
        </Form.Group>
        <Form.Group>
          <Form.File
            id="imagesSiteForm"
            label="Additional Images"
            custom
            name=""
          />
        </Form.Group>
        <Form.Group>
          <Form.File
            id="documentsSiteForm"
            label="Addition Documents"
            custom
            name=""
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} xs={12} md={12} controlId="formGridZip">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="notes"
              onChange={this.handleChange}
              value={this.state.notes}
            />
          </Form.Group>
        </Form.Row>

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

export default SiteForm;
