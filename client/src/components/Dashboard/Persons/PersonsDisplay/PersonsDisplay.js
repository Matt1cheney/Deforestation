import React from "react";
import PersonCard from "../PersonCard/Person";
import Row from "react-bootstrap/Row";
import CreateNew from "../../CreateNew/CreateNew";
import API from "../../../../utils/API";


const createObj = {
  name: "Person",
  title: "People",
  path: "/dashboard/newPerson"
}


const PersonDisplay = ( { persons } ) => {

  return(
    <>
    <CreateNew obj={createObj}/>
    <Row>
      {persons.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </Row>
    </>
  )
}

export default PersonDisplay;