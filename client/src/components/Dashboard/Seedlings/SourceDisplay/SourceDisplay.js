import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sources from "../../../../jsonData/source.json";
import SourceCard from "../SourceCard/SourceCard";
import CreateNew from "../../CreateNew/CreateNew";

class SourceDisplay extends React.Component{

  constructor() {
    super();
    this.admin = true;
    this.coordinator = false;
    this.sources = [];
    this.createObj = {
      name: "Source",
      title: "Sources",
      path: "/dashboard/newSource"
    }
  }

  return (

    <>
    <CreateNew obj={createObj}/>
    <Row>
      {sources.map((source, index) => (
        <Col sm={12} key={index}>
          <SourceCard source={source} />
        </Col>
      ))}
    </Row>
    </>
  )
}

export default SourceDisplay;