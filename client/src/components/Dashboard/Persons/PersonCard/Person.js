import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import API from "../../../../utils/API";

const PersonCard = ({person}) => {

  const onDelete = async (event) => {
    try {
      const response = await API.deletePerson(person.name)
      alert(response.data.message);
      window.location.reload(true);
    }
    catch(err) { alert(err.message) } 
  }

  return (
    <Col lg={4} s={6} xs={12} >
      <Card className="volunteerCard">
        <Card.Body>
          <h5>{person.name}</h5>
          <h6>{person.role}</h6>
          <i className="fas fa-phone"></i><span>{`${person.phone}`}</span>
          <br></br>
          <i className="fas fa-envelope-square"></i><span>{`${person.email}`}</span>
          <br></br>
          <Button className="btn eventBtn" size="sm" variant="dark">Delete Volunteer</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PersonCard;