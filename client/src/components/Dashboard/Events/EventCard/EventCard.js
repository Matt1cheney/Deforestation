import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";


const EventCard = ({ event }) => {


  const {
    site,
    date,
    start_time,
    end_time,
    coordinator,
    description,
    planters
  } = event;

  return (
    <Card className="dashboardCard">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title><h3>{site}</h3></Card.Title>
          </Col>
          <Col>
            <Button className="btn align-right" variant="dark">Delete Event</Button>
          </Col>
        </Row>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{start_time}-{end_time}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Coordinator: {coordinator}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Subtitle className="mb-2">Volunteers:</Card.Subtitle>
        <Row>
          {planters.map((person, index) => (
            <Col lg={4} s={6} xs={12} key={index}>
              <Card className="volunteerCard">
                <Card.Body>
                  <h5>{person.name}</h5>
                  <i className="fas fa-phone"></i><span>{`${person.phone}`}</span>
                  <br></br>
                  <i className="fas fa-envelope-square"></i><span>{`${person.email}`}</span>
                  <br></br>
                  <Button className="btn eventBtn" size="sm" variant="dark">Delete Volunteer</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  )
}

export default EventCard;