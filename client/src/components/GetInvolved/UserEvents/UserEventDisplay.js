import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserEventCard from "../UserEvents/UserEventCard";



function UserEventDisplay( {events} ) {

  return (

    <>
    
      {events.map((event, index) => (
        <Col className="displayCol" xs={12} md={6} lg={4} key={index}>
          <UserEventCard event={event} />
        </Col>
      ))}
    
    </>
  )
}

export default UserEventDisplay;
