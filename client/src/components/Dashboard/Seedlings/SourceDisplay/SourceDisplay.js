 import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SourceCard from "../SourceCard/SourceCard";
import CreateNew from "../../CreateNew/CreateNew";
import API from "../../../../utils/API";

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

  componentWillMount() {
    API.getSources().then(data => {console.log(data.data); this.setState( this.sources = data.data)})
  }

  render() {
    return (
      <>
      <CreateNew obj={this.createObj}/>
      <Row>
        {this.sources.map((source, index) => (
          <Col sm={12} key={index}>
            <SourceCard source={source} />
          </Col>
        ))}
      </Row>
      </>
    )
  }
}

export default SourceDisplay;