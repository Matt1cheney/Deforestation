import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import sources from "../../../../jsonData/source.json";
import SourceCard from "../SourceCard/SourceCard";
import CreateNew from "../../CreateNew/CreateNew";

function SourceDisplay({sources}) {

  const createObj = {
    name: "Source",
    title: "Sources",
    path: "/dashboard/newSource"
  }

  return (

    <>
    <CreateNew obj={createObj}/>
    <Row>
      {sources && sources.map((source, index) => (
        <Col sm={12} key={index}>
          <SourceCard source={source} />
        </Col>
      ))}
    </Row>
    </>
  )
}

export default SourceDisplay;