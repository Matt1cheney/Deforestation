import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";


const SourceCard = ({ source }) => {


  const { name, owner, address, seedlings, region } = source;

  return (
    <Card className="dashboardCard">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title><h3>{name}</h3></Card.Title>
          </Col>
          <Col>
            <Button className="btn align-right" variant="dark">Delete Source</Button>
          </Col>
        </Row>
        <Card.Subtitle className="mb-2 text-muted">Owner: {owner}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Region: {region}</Card.Subtitle>
        <br></br>
        <Card.Subtitle className="mb-2"><b>Address:</b> <br></br> {address.street} <br></br> {address.city}, {address.state} <br></br> {address.zip}</Card.Subtitle>
        <h6><b>Tree Types:</b> {seedlings.tree_type.join(", ")}</h6>
        <h6><b>Count:</b> {seedlings.count}</h6>
        <h6><b>Available:</b> {seedlings.available}</h6>
        <h6><b>Intended Site:</b> {seedlings.site}</h6>
      </Card.Body>
    </Card>
  )
}

export default SourceCard;