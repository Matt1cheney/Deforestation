import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import Spinner from "react-bootstrap/Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.coordinators = [];
    this.persons = [];
    this.state = {
      loader: false,
      persons: [],
      sites: [],
      regions: [],
      site: null,
      coordinator: null,
      region: null,
      description: "",
      date: "",
      startDate: null,
      endDate: null,
      volunteers: null
    };
  }

  componentWillMount() {
    
    if(this.props.location.event === undefined) 
    {
      this.props.history.push('/dashboard/events');
    }
    else if(this.props.location.event && this.props.location.event._id === undefined) 
    {
      this.props.history.push('/dashboard/events');
    } 
    else 
    {
      let selected_volunteers_option = this.props.location.event.volunteers.map((value) => {
        return {
          label: value.name,
          value: value._id,
        };
      });

      this.setState({
        loader: true,
        persons: [],
        sites: [],
        _id: this.props.location.event._id,
        site: this.props.location.event.site && this.props.location.event.site._id ? this.props.location.event.site._id : null,
        coordinator: this.props.location.event.coordinator && this.props.location.event.coordinator._id ? this.props.location.event.coordinator._id : null,
        region: this.props.location.event.region && this.props.location.event.region._id ? this.props.location.event.region._id : null,
        description: this.props.location.event.description,
        startDate: this.props.location.event.startDate,
        endDate: this.props.location.event.endDate,
        volunteers: selected_volunteers_option
      });

      API.getPersons().then((result) => {
        this.setState({
          persons: result.data,
          coordinators: result.data.filter((data) => {
            return data.role.toLowerCase() === "coordinator";
          }),
        });

        API.getSites().then((result) => {
          this.setState({ sites: result.data });

          API.getPersons().then((result) => {
            this.setState({ persons: result.data, loader: false });
          });
        });
      });
    }
  }

  handleSiteChange = (data) => {
    if (data.value !== "") {
      this.setState({
        site: data.value,
      });
    }
  };

  handleCoordinatorChange = (data) => {
    if (data.value !== "") {
      this.setState({
        coordinator: data.value,
      });
    }
  };

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

    if (this.state.site === null || this.state.coordinator === null || this.state.region === null) {
      alert("Looks like you forgot one!");
      return;
    }

    let eventData = {
      _id: this.state._id,
      site: this.state.site,
      coordinator: this.state.coordinator,
      region: this.state.region,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      volunteers: this.state.volunteers
    };

    try {
      await API.updateEvent(eventData);
      alert("Event Updated");
      this.props.history.goBack();
    } catch (err) {
      console.log(err.message);
    }
        
  };

  setStartDate = (event) => {
    this.setState({ startDate: event });
  };

  setEndDate = (event) => {
    this.setState({ endDate: event });
  };

  handleVolunteersChange = (event) => {

    let new_arr = event.map((v) => {
      return v.value;
    });

    this.setState({ volunteers: new_arr });

    console.log(new_arr)
  }

  render() {
    let sites_option = this.state.sites.map((value) => {
      return {
        label: value.name,
        value: value._id,
      };
    });

    let coordinators = this.state.persons.filter((data) => {
      return data.role.toLowerCase() === "coordinator";
    });

    let coordinators_option = coordinators.map((value) => {
      return {
        label: value.name,
        value: value._id,
      };
    });

    let volunteers = this.state.persons.filter((data) => {
      return data.role.toLowerCase() === "volunteer";
    });

    let volunteers_option = volunteers.map((value) => {
      return {
        label: value.name,
        value: value._id,
      };
    });

    return (
      <Form
        className="formContainer"
        onSubmit={this.handleSubmit}
        style={{ minHeight: 505 }}
      >
        <h1>Update Event</h1>
        {!this.state.loader ? (
          <div>
            <Form.Row>
              <Form.Group as={Col} xs={12} md={4} controlId="formSite">
                <Form.Label>Site</Form.Label>
                <Select
                  name="site"
                  placeholder="Select Site"
                  options={sites_option}
                  value={sites_option.filter(
                    ({ value }) => value === this.state.site
                  )}
                  onChange={this.handleSiteChange}
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} md={4} controlId="formCoordinator">
                <Form.Label>Coordinator</Form.Label>
                <Select
                  name="coordinator"
                  placeholder="Select Coordinator"
                  options={coordinators_option}
                  value={coordinators_option.filter(
                    ({ value }) => value === this.state.coordinator
                  )}
                  onChange={this.handleCoordinatorChange}
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} md={4} controlId="formRegion">
                <Form.Label>Regions</Form.Label>
                <Form.Control
                  as="select"
                  name="region"
                  onChange={this.handleChange}
                  value={this.state.region}
                >
                  <option>none</option>
                  {this.state.regions.map(
                    (region, index) =>
                      region.name &&
                      region.name !== "" && (
                        <option key={index} value={region._id}>
                          {region.name}
                        </option>
                      )
                  )}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formDate">
                <Form.Label>Start Date</Form.Label>
                <DatePicker
                  autoComplete="false"
                  className="form-control"
                  placeholder="MM/DD/YYYY"
                  onChange={this.setStartDate}
                  minDate={new Date()}
                  showYearDropdown
                  yearDropdownItemNumber={5}
                  dateFormatCalendar="MMMM"
                  scrollableYearDropdown
                  selectsStart
                  selected={
                    this.state.startDate ? new Date(this.state.startDate) : ""
                  }
                  startDate={
                    this.state.startDate ? new Date(this.state.startDate) : ""
                  }
                  endDate={
                    this.state.endDate ? new Date(this.state.endDate) : ""
                  }
                  name="startDate"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formEndTime">
                <Form.Label>End Date</Form.Label>
                <DatePicker
                  className="form-control"
                  placeholder="MM/DD/YYYY"
                  onChange={this.setEndDate}
                  minDate={
                    new Date(this.state.startDate) > new Date()
                      ? new Date(this.state.startDate)
                      : new Date()
                  }
                  showYearDropdown
                  yearDropdownItemNumber={5}
                  dateFormatCalendar="MMMM"
                  scrollableYearDropdown
                  selectsEnd
                  selected={
                    this.state.endDate ? new Date(this.state.endDate) : ""
                  }
                  startDate={
                    this.state.startDate ? new Date(this.state.startDate) : ""
                  }
                  endDate={
                    this.state.endDate ? new Date(this.state.endDate) : ""
                  }
                  name="endDate"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formDescription">
              <Form.Label>Volunteers</Form.Label>
              <Select
                name="volunteers"
                placeholder="Select Volunteers"
                isMulti={true}
                options={volunteers_option}
                defaultValue={this.state.volunteers}
                onChange={this.handleVolunteersChange}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
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

export default EventForm;