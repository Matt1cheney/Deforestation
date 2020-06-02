import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Select from "react-select";
import DatePicker from "react-datepicker";
import API from "../../../../utils/API";

class UpdateSourceForm extends React.Component {
  constructor() {
    super();
    this.owners = [];
    this.coordinators = [];
    this.persons = [];
    this.regions = [];
    this.sites = [];
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
      loader: false,
      _id: "",
      name: "",
      region: null,
      owner: null,
      street: "",
      city: "",
      state: "",
      zip: "",
      coordinator: null,
      count: "",
      tree_type: "",
      target_age: "",
      available: "",
      site: "",
    };
  }

  async componentWillMount() {

    if(this.props.location.source === undefined) 
    {
      this.props.history.push('/dashboard/source');
    }
    else if(this.props.location.source && this.props.location.source._id === undefined) 
    {
      this.props.history.push('/dashboard/source');
    } 
    else 
    {
      this.setState({
        loading: true,
        _id: this.props.location.source._id,
        name: this.props.location.source.name,
        region: this.props.location.source.region && this.props.location.source.region._id ? this.props.location.source.region._id : null,
        owner: this.props.location.source.owner && this.props.location.source.owner._id ? this.props.location.source.owner._id : null,
        street: this.props.location.source.address.street ? this.props.location.source.address.street : "",
        city: this.props.location.source.address.city ? this.props.location.source.address.city : "",
        state: this.props.location.source.address.state ? this.props.location.source.address.state : "",
        zip: this.props.location.source.address.zip ? this.props.location.source.address.zip : "",
        coordinator: this.props.location.source.coordinator && this.props.location.source.coordinator._id ? this.props.location.source.coordinator._id : null,
        count: this.props.location.source.seedlings.count,
        tree_type: this.props.location.source.seedlings.tree_type,
        available: this.props.location.source.seedlings.available,
        target_age: this.props.location.source.seedlings.target_age,
        site: this.props.location.source.seedlings.intendSite && this.props.location.source.seedlings.intendSite._id ? this.props.location.source.seedlings.intendSite._id : null
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
        API.getSites().then((result) => {
          this.setState((this.sites = result.data));

          API.getRegions().then((data) => {
            this.setState((this.regions = data.data));
            this.setState({ loading: false });
          });
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

  handleSiteChange = (data) => {
    if (data.value !== "") {
      this.setState({
        site: data.value,
      });
    }
  };

  setAvailableDate = (event) => {
    this.setState({ available: event });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    console.log(this.state)

    if (
      this.state.street === "" ||
      this.state.owner === "" ||
      this.state.city === "" ||
      this.state.state === "" ||
      this.state.zip === "" ||
      this.state.region === null ||
      this.state.coordinator === null ||
      this.state.name === "" ||
      this.state.count === "" || 
      this.state.tree_type === "" || 
      this.state.target_age === "" || 
      this.state.available === "" || 
      this.state.site === ""
    ) {
      alert("Looks like you forgot one!");
      return;
    }

    let sourceData = {
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
      coordinator: this.state.coordinator,
      seedlings: {
        count: this.state.count,
        tree_type: this.state.tree_type,
        available: this.state.available,
        target_age: this.state.target_age,
        intendSite: this.state.site,
      }
    };

    try {
      await API.updateSource(sourceData);
      alert("Source Updated");
      this.props.history.goBack();
    } catch (err) {
      alert(err.message);
    }
  };

  render() {

    let sites_option = this.sites.map((value) => {
      return {
        label: value.name,
        value: value._id,
      };
    });

    return (
      <Form className="formContainer" onSubmit={this.handleSubmit}>
        <h1>Update Source</h1>
        {!this.state.loading ? (
          <>
            <Form.Row>
              <Form.Group as={Col} xs={12} md={4} controlId="formSiteName">
                <Form.Label>Source Name</Form.Label>
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
                  value={this.state.region}
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
                  onChange={this.handleChange}
                  value={this.state.owner}
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
              <Form.Group as={Col} xs={12} md={6} controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1234 Main St"
                  name="street"
                  onChange={this.handleChange}
                  value={this.state.street}
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} md={6} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  onChange={this.handleChange}
                  value={this.state.city}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="state"
                  onChange={this.handleChange}
                  value={this.state.state}
                >
                  <option>select</option>
                  {this.states.map((state, index) => (
                    <option key={index}>{state}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} xs={12} md={4} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  onChange={this.handleChange}
                  value={this.state.zip}
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} md={4} controlId="formCoordinator">
                <Form.Label>Coordinator</Form.Label>
                <Form.Control
                  as="select"
                  name="coordinator"
                  onChange={this.handleChange}
                  value={this.state.coordinator}
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
              <Form.Group as={Col} xs={12} md={12} controlId="formMainText" style={{margin: 0}}>
                <Form.Label style={{textDecoration: "underline"}}>Seedlings Details:</Form.Label>
              </Form.Group>

              <Form.Group as={Col} xs={12} md={4} controlId="formGridCity">
                <Form.Label>Count</Form.Label>
                <Form.Control
                  type="number"
                  name="count"
                  onChange={this.handleChange}
                  value={this.state.count}
                />
              </Form.Group>
              
              <Form.Group as={Col} xs={12} md={4} controlId="formGridCity">
                <Form.Label>Target Age</Form.Label>
                <Form.Control
                  type="number"
                  name="target_age"
                  onChange={this.handleChange}
                  value={this.state.target_age}
                />
              </Form.Group>
              
              <Form.Group as={Col} xs={12} md={4} controlId="formGridCity">
                <Form.Label>Available Date</Form.Label>
                <DatePicker
                  className="form-control"
                  placeholder="MM/DD/YYYY"
                  onChange={this.setAvailableDate}
                  minDate={new Date()}
                  showYearDropdown
                  yearDropdownItemNumber={5}
                  dateFormatCalendar="MMMM"
                  scrollableYearDropdown
                  selected={
                    this.state.available ? new Date(this.state.available) : ""
                  }
                  name="available"
                />
              </Form.Group> 
              
              <Form.Group as={Col} xs={12} md={6} controlId="formGridCity">
                <Form.Label>Tree Type</Form.Label>
                <Form.Control
                  type="text"
                  name="tree_type"
                  onChange={this.handleChange}
                  value={this.state.tree_type}
                />
                <small>Please use comma(,) to sepereate type</small>
              </Form.Group>
              
              <Form.Group as={Col} xs={12} md={6} controlId="formGridCity">
                <Form.Label>Site</Form.Label>
                <Select
                  name="site"
                  placeholder="Select Site"
                  options={sites_option}
                  defaultValue={this.state.site}
                  value={sites_option.filter(
                    ({ value }) => value === this.state.site
                  )}
                  onChange={this.handleSiteChange}
                />
              </Form.Group>              
            </Form.Row>

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

export default UpdateSourceForm;