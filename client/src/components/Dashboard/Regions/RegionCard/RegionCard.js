import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";


const RegionCard = ({ region }) => {


  const { name, coordinator, descriptor } = region;

  return (
    <Card className="dashboardCard">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title><h3>{name}</h3></Card.Title>
          </Col>
          <Col>
            {/* <Button className="btn align-right" variant="dark">Edit Region</Button> */}
            <Button className="btn align-right" variant="dark">Delete Region</Button>
          </Col>
        </Row>
        <Card.Subtitle className="mb-2 text-muted">Coordinator: {coordinator.name}</Card.Subtitle>
        <Card.Text>{descriptor}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default RegionCard;