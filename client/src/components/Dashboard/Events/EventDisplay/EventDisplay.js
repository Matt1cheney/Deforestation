import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import events from "../../../../jsonData/events.json";
import EventCard from "../EventCard/EventCard";


function EventDisplay() {

  const admin = true;
  const coordinator = false;

  return (

    <Row>
      {events.map((event, index) => (
        <Col sm={12} key={index}>
          <EventCard event={event} />
        </Col>
      ))}
    </Row>
  )
}

export default EventDisplay;