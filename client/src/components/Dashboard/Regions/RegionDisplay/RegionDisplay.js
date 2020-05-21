import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import regions from "../../../../regions.json";
import RegionCard from "../RegionCard/RegionCard";


function RegionDisplay() {

  console.log(regions)
  return (
    <Row>
      {regions.map((region, index) => (
        <Col sm={12} key={index}>
          <RegionCard region={region} />
        </Col>
      ))}
    </Row>
  )
}

export default RegionDisplay;