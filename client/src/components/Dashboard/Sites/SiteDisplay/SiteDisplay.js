import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import sites from "../../../../jsonData/sites.json";
import SiteCard from "../SiteCard/SiteCard";
import CreateNew from "../../CreateNew/CreateNew";


function SiteDisplay({sites}) {

  const admin = true;
  const coordinator = false;

  const createObj = {
    name: "Site",
    title: "Sites",
    path: "/dashboard/newSite"
  }

  return (
    <>
      <CreateNew obj={createObj}/>
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