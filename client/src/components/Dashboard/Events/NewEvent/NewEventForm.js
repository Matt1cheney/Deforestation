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
  constructor() {
    super();
    this.coordinators = [];
    this.persons = [];
    this.state = {
      loader: false,
      persons: [],
      sites: [],
      site: null,
      coordinator: null,
      description: "",
      date: "",
      start_date: null,
      end_date: null,
      volunteers: []
    };
  }

  componentWillMount() {
    this.setState({ loader: true });
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
          this.setState({ persons: result.data });
          this.setState({ loader: false });
        });
      });
    });
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

    if (this.state.site === null || this.state.coordinator === null || this.state.coordinator === null) {
      alert("Looks like you forgot one!");
      return;
    }

    let eventData = {
      site: this.state.site,
      coordinator: this.state.coordinator,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      volunteers: this.state.volunteers
    };

    try {
      await API.createEvent(eventData);
      alert("Event Added");
      this.props.history.goBack();
    } catch (err) {
      console.log(err.message);
    }

    this.setState({
      loader: false,
      site: null,
      coordinator: null,
      description: "",
      start_date: null,
      end_date: null,
      volunteers: []
    });
    
  };

  setStartDate = (event) => {
    this.setState({ start_date: event });
  };

  setEndDate = (event) => {
    this.setState({ end_date: event });
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
        <h1>New Event</h1>
        {!this.state.loader ? (
          <div>
            <Form.Row>
              <Form.Group as={Col} xs={12} md={6} controlId="formSite">
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

              <Form.Group as={Col} xs={12} md={6} controlId="formCoordinator">
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
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formDate">
                <Form.Label>Start Date</Form.Label>
                <DatePicker
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
                    this.state.start_date ? new Date(this.state.start_date) : ""
                  }
                  startDate={
                    this.state.start_date ? new Date(this.state.start_date) : ""
                  }
                  endDate={
                    this.state.send_date ? new Date(this.state.send_date) : ""
                  }
                  name="start_date"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formEndTime">
                <Form.Label>End Date</Form.Label>
                <DatePicker
                  className="form-control"
                  placeholder="MM/DD/YYYY"
                  onChange={this.setEndDate}
                  minDate={
                    new Date(this.state.start_date) > new Date()
                      ? new Date(this.state.start_date)
                      : new Date()
                  }
                  showYearDropdown
                  yearDropdownItemNumber={5}
                  dateFormatCalendar="MMMM"
                  scrollableYearDropdown
                  selectsEnd
                  selected={
                    this.state.end_date ? new Date(this.state.end_date) : ""
                  }
                  startDate={
                    this.state.start_date ? new Date(this.state.start_date) : ""
                  }
                  endDate={
                    this.state.end_date ? new Date(this.state.end_date) : ""
                  }
                  name="end_date"
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
                // value={volunteers_option.filter(
                //   ({ value }) => value === this.state.volunteers
                // )}
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
