import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";


const UserEventCard = ({ event }) => {


  const {
    site,
    date,
    startTime,
    endTime,
    coordinator,
    description,
    volunteers
  } = event;

  return (
    <Card className="dashboardCard">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title><h3>{site && site.name}</h3></Card.Title>
          </Col>
          <Col>
            <Button className="btn align-right" variant="dark">View Event</Button>
          </Col>
        </Row>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{startTime}-{endTime}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Coordinator: {coordinator && coordinator.name}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UserEventCard;