import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import events from "../../../../jsonData/events.json";
import EventCard from "../EventCard/EventCard";
import CreateNew from "../../CreateNew/CreateNew";


function EventDisplay( {events} ) {

  const admin = true;
  const coordinator = false;

  const createObj = {
    name: "Event",
    title: "Events",
    path: "/dashboard/newEvent"
  }

  return (

    <>
    {/* <CreateNew obj={createObj}/> */}
    <Row>
      {events.map((event, index) => (
        <Col sm={12} key={index}>
          <EventCard event={event} />
        </Col>
      ))}
    </Row>
    </>
  )
}

export default EventDisplay;