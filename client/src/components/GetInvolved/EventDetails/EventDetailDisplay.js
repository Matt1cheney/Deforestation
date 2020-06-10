import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailEventCard from "./DetailEventCard";



function EventDetailDisplay( {event} ) {

  return (

    <>
    <Row>
      
        <Col sm={{ span: 6, offset: 3 }}>
          <DetailEventCard event={event} />
        </Col>
      
    </Row>
    </>
  )
}

export default EventDetailDisplay;   