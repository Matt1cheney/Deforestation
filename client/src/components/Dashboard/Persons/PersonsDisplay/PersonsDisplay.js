import React from "react";
import PersonCard from "../PersonCard/Person";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";


const PersonDisplay = ({ persons }) => {

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
        {persons.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </Row>
    </>
  )
}

export default PersonDisplay;