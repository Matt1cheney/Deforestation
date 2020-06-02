import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plant from "../../../images/Plant.jpeg";
import moment from "moment";
// import Link from "react-bootstrap/Link";


const UserEventCard = ({ event }) => {
  function sayHello() {
    alert('Hello!');

  }

  const { site, startDate, endDate, coordinator, description } = event;


 

  return (
    <>
      <Card className="eventCard">
        <Card.Img variant="top" src={Plant} />
        <Card.Body>
          <Card.Title>
            <h3>{site && site.name}</h3>
          </Card.Title>
          <Card.Text>{description}</Card.Text>

          <Card.Subtitle className="mb-2 text-muted">
            Event Date: <br></br>
            {moment(startDate).format("MM/DD/YYYY")} -{" "}
            {moment(endDate).format("MM/DD/YYYY")}
          </Card.Subtitle>
          <Button variant="primary" onClick={sayHello}>View Event</Button>
          
       
        </Card.Body>
      </Card>
    </>
  );
};

export default UserEventCard;
