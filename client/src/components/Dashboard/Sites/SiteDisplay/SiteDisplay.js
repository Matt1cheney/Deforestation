import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sites from "../../../../jsonData/sites.json";
import SiteCard from "../SiteCard/SiteCard";


function SiteDisplay() {

  const admin = true;
  const coordinator = false;

  return (
    <>
      <Row>
        {sites.map((site, index) => (
          <Col sm={12} key={index}>
            <SiteCard site={site} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default SiteDisplay;