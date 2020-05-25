import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sources from "../../../../jsonData/source.json";
import SourceCard from "../SourceCard/SourceCard";


function SourceDisplay() {

  const admin = true;
  const coordinator = false;

  return (

    <Row>
      {sources.map((source, index) => (
        <Col sm={12} key={index}>
          <SourceCard source={source} />
        </Col>
      ))}
    </Row>
  )
}

export default SourceDisplay;