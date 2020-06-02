import React from "react";
import { Link } from "react-router-dom";
import PersonCard from "../PersonCard/Person";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import API from "../../../../utils/API";


class PersonDisplay extends React.Component {

  constructor() {
    super();
    this.admin = true;
    this.persons = []
    this.createObj = {
      name: "Persons",
      title: "Persons",
      path: "/dashboard/newPerson"
    }
    this.state = {
      persons: [],
      loading: false,
    }
  }

  componentWillMount() {
    this.setState({ loading: true });
    API.getPersons().then(data => {
      this.setState({ persons: data.data, loading: false })
    });
  }

  async onDelete(_id, this4) {
    try {
      await API.deletePerson(_id);
      let filter_person = this4.state.persons
      const indexOfDeleteEvent = filter_person.findIndex(a => {
        return a._id === _id
      })
      filter_person.splice(indexOfDeleteEvent, 1)
      this4.setState({ persons: filter_person });
      alert("Deleted");
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    return (
      <>
      <Jumbotron className="createNew">
        <h1 style={{margin: 0}}>People</h1>
        <p>
          <Link
            className="btn color-white width-240"
            variant="dark"
            style={{ width: "100%", marginBottom: 10 }}
            to={{ pathname: `/dashboard/newAdmin` }}
          >
            Add New Admin/Coordinator
          </Link>
        </p>
        <p>
          <Link
            className="btn color-white width-260"
            variant="dark"
            style={{ width: "100%", marginBottom: 10 }}
            to={{ pathname: `/dashboard/newPerson` }}
          >
            Add New Volunteer/Land Owner
          </Link>
        </p>
      </Jumbotron>
      {!this.state.loading ? (
          this.state.persons.length > 0 ? (
            <Row>
              {this.state.persons.map((person, index) => (
                <PersonCard key={index} person={person} onDelete={this.onDelete} this3={this}/>
              ))}
            </Row>
      ) : (
            <Row>
              <Col sm={12}>
                <h6 className="color-white">No Record Founds</h6>
              </Col>
            </Row>
          )
        ) : (
          <Row>
            <Col sm={12}>
              <Spinner animation="border" role="status" variant="light">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        )}
    </>
    )
  }
}

export default PersonDisplay;