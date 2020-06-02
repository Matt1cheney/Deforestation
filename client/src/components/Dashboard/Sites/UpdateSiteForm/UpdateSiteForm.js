import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import API from "../../../../utils/API";

class UpdateSiteForm extends React.Component {
  constructor(props) {
    super(props);
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
      loading: false,
      _id: null,
      name: "",
      region: null,
      owner: null,
      street: "",
      city: "",
      state: "",
      zip: "",
      latitude: "",
      longitude: "",
      status: "",
      coordinator: null,
      capacity: "",
      tree_type: "",
      location: "",
      number_planted: "",
      notes: "",
    };
  }

  async componentWillMount() {

    if(this.props.location.site === undefined) 
    {
      this.props.history.push('/dashboard/sites');
    }
    else if(this.props.location.site && this.props.location.site._id === undefined) 
    {
      this.props.history.push('/dashboard/sites');
    } 
    else 
    {
      this.setState({
        loading: true,
        _id: this.props.location.site._id,
        name: this.props.location.site.name,
        region: this.props.location.site.region && this.props.location.site.region._id ? this.props.location.site.region._id : null,
        owner: this.props.location.site.owner && this.props.location.site.owner._id ? this.props.location.site.owner._id : null,
        street: this.props.location.site.address.street ? this.props.location.site.address.street : "",
        city: this.props.location.site.address.city ? this.props.location.site.address.city : "",
        state: this.props.location.site.address.state ? this.props.location.site.address.state : "",
        zip: this.props.location.site.address.zip ? this.props.location.site.address.zip : "",
        latitude: this.props.location.site.latitude,
        longitude: this.props.location.site.longitude,
        status: this.props.location.site.status,
        coordinator: this.props.location.site.coordinator && this.props.location.site.coordinator._id ? this.props.location.site.coordinator._id : null,
        capacity: this.props.location.site.plantingTarget.capacity,
        tree_type: this.props.location.site.plantingTarget.tree_type,
        location: this.props.location.site.plantingTarget.location,
        number_planted: this.props.location.site.plantingTarget.number_planted,
        notes: this.props.location.site.notes,
      });

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
        API.getRegions().then((data) => {
          this.setState((this.regions = data.data));
          this.setState({ loading: false });
        });
      });
    }
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
      this.state.city === "" ||
      this.state.state === "" ||
      this.state.zip === "" ||
      this.state.latitude === "" ||
      this.state.longitude === "" ||
      this.state.region === null ||
      this.state.coordinator === null ||
      this.state.name === "" ||
      this.state.capacity === "" || 
      this.state.tree_type === "" || 
      this.state.location === "" || 
      this.state.number_planted === ""
    ) {
      alert("Looks like you forgot one!");
      return;
    }

    let siteData = {
      _id: this.state._id,
      name: this.state.name,
      region: this.state.region,
      owner: this.state.owner,
      address: {
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
      },
      status: this.state.status,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      coordinator: this.state.coordinator,
      plantingTarget: {
        capacity: this.state.capacity,
        tree_type: this.state.tree_type,
        location: this.state.location,
        number_planted: this.state.number_planted,
      },
      notes: this.state.notes
    };

    try {
      await API.updateSite(siteData);
      alert("Site Updated");
      this.props.history.goBack();
    } catch (err) {
      alert(err.message);
    }
  };

  render() {

    return (
      <Form className="formContainer" onSubmit={this.handleSubmit}>
        <h1>Update Site</h1>
        {!this.state.loading ? (
          <>
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
                  value={this.state.region}
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
                <Form.Control
                  as="select"
                  name="owner"
                  value={this.state.owner}
                  onChange={this.handleChange}
                >
                  <option>none</option>
                  {this.owners.map((owner, index) => (
                    <option key={index} value={owner._id}>
                      {owner.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs={12} md={4} controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1234 Main St"
                  name="street"
                  onChange={this.handleChange}
                  value={this.state.street}
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} md={3} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  onChange={this.handleChange}
                  value={this.state.city}
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} md={3} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="state"
                  value={this.state.state}
                  onChange={this.handleChange}
                >
                  <option>select</option>
                  {this.states.map((state, index) => (
                    <option key={index}>{state}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} xs={12} md={2} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  onChange={this.handleChange}
                  value={this.state.zip}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>              
              <Form.Group as={Col} xs={12} md={12} controlId="formMainText" style={{margin: 0}}>
                <Form.Label style={{textDecoration: "underline"}}>Planting Target:</Form.Label>
              </Form.Group>

              <Form.Group as={Col} xs={12} md={3} controlId="formGridCity">
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                  type="number"
                  name="capacity"
                  onChange={this.handleChange}
                  value={this.state.capacity}
                />
              </Form.Group>
              
              <Form.Group as={Col} xs={12} md={3} controlId="formGridCity">
                <Form.Label>Tree Type</Form.Label>
                <Form.Control
                  type="text"
                  name="tree_type"
                  onChange={this.handleChange}
                  value={this.state.tree_type}
                />
                <small>Please use comma(,) to sepereate type</small>
              </Form.Group>
              
              <Form.Group as={Col} xs={12} md={3} controlId="formGridCity">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  onChange={this.handleChange}
                  value={this.state.location}
                />
              </Form.Group>
              
              <Form.Group as={Col} xs={12} md={3} controlId="formGridCity">
                <Form.Label>Number Planted</Form.Label>
                <Form.Control
                  type="number"
                  name="number_planted"
                  onChange={this.handleChange}
                  value={this.state.number_planted}
                />
              </Form.Group>              
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs={12} md={3} controlId="formGridCity">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="text"
                  name="latitude"
                  onChange={this.handleChange}
                  value={this.state.latitude}
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} md={3} controlId="formGridZip">
                <Form.Label>longitude</Form.Label>
                <Form.Control
                  type="text"
                  name="longitude"
                  onChange={this.handleChange}
                  value={this.state.longitude}
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} md={3} controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  name="status"
                  value={this.state.status}
                  onChange={this.handleChange}
                >
                  <option>none</option>
                  <option>Pending</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} xs={12} md={3} controlId="formCoordinator">
                <Form.Label>Coordinator</Form.Label>
                <Form.Control
                  as="select"
                  name="coordinator"
                  value={this.state.coordinator}
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

            <Form.Group>
              <Form.File
                id="profileImageSiteForm"
                label="Profile Image"
                custom
                name=""
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                id="contractSiteForm"
                label="Contract"
                custom
                name=""
              />
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
    );
  }
}

export default UpdateSiteForm;