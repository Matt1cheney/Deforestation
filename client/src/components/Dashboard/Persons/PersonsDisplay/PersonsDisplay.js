import React from "react";
import PersonCard from "../PersonCard/Person";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
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
  }

  componentWillMount() {
    API.getPersons().then(data => {console.log(data.data); this.setState( this.persons = data.data)});
  }

  render() {
    return (
      <>
      <Jumbotron className="createNew">
        <h1>People</h1>
        <p>
          <Button href="/dashboard/newAdmin" className="btn center" variant="dark">Add New Admin/Coordinator</Button>
        </p>
        <p>
          <Button href="/dashboard/newPerson" className="btn center" variant="dark">Add New Volunteer/Land Owner</Button>
        </p>
      </Jumbotron>
      <Row>
        {this.persons.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </Row>
    </>
    )
  }
}

export default PersonDisplay;