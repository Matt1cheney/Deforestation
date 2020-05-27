import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import regions from "../../../../jsonData/regions.json";
import RegionCard from "../RegionCard/RegionCard";
import CreateNew from "../../CreateNew/CreateNew";


function RegionDisplay({regions}) {

  const admin = true;

  const createObj = {
    name: "Region",
    title: "Regions",
    path: "/dashboard/newRegion"
  }

  return (
    <>
      { admin &&  <CreateNew obj={createObj} />}
      <Row>
        {regions.map((region, index) => (
          <Col sm={12} key={index}>
            <RegionCard region={region} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default RegionDisplay;