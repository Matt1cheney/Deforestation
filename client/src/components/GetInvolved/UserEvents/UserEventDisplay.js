import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserEventCard from "../UserEvents/UserEventCard";



function UserEventDisplay( {events} ) {

  return (

    <>
    <Row>
      {events.map((event, index) => (
        <Col sm={12} key={index}>
          <UserEventCard event={event} />
        </Col>
      ))}
    </Row>
    </>
  )
}

export default UserEventDisplay;