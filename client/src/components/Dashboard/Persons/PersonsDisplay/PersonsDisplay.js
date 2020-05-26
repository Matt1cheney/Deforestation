import React, {useEffect, useState} from "react";
import PersonCard from "../PersonCard/Person";
import Row from "react-bootstrap/Row";
import CreateNew from "../../CreateNew/CreateNew";
import API from "../../../../utils/API";

const persons = [
    {
      "name": "Dan Delong",
      "email": "dan@gmail.com",
      "phone": "(603)554-5392",
      "role": "coordinator"
    },
    {
      "name": "Joe Field",
      "email": "joe@gmail.com",
      "phone": "(603)554-5392",
      "role": "volunteer"
    },
    {
      "name": "Amanda Adams",
      "email": "amanda@gmail.com",
      "phone": "(603)554-5392",
      "role": "coordinator"
    },
    {
      "name": "Nancy Meyers",
      "email": "nancy@gmail.com",
      "phone": "(603)554-5392",
      "role": "administrator"
    }
]

const createObj = {
  name: "Person",
  title: "People",
  path: "/dashboard/newPerson"
}


const PersonDisplay = () => {
  const [personState, setPersonState] = useState({
    persons: []
  })



  useEffect(() => {
    API.getPersons()
    .then(res => setPersonState({ ...personState, persons: res.data}))
  }, []);

  console.log(personState)

  return(
    <>
    <CreateNew obj={createObj}/>
    <Row>
      {personState.persons.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </Row>
    </>
  )
}

export default PersonDisplay;