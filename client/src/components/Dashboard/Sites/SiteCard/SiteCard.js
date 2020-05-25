import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";


const SiteCard = ({ site }) => {


  const { profile_image, name, region, owner, address, status, planting_targets, notes, images } = site;

  return (
    <Card className="dashboardCard">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title><h3>{name}</h3></Card.Title>
          </Col>
          <Col>
            <Button className="btn align-right" variant="dark">Delete Site</Button>
          </Col>
        </Row>
        <Row>
          <Col md={5} lg={4} xl={3}>
            <img src={profile_image}></img>
          </Col>
          <Col md={7} lg={8} xl={9}>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <h6><b>Region:</b> {region} </h6>
                <h6><b>Owner:</b> {owner} </h6>
                {" "}
                <p><b>Address:</b> <br></br> {address.street} <br></br> {address.city}, {address.state} <br></br> {address.zip} </p>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <h6><b>Status:</b> {status} </h6>
                <h6><b>Capacity:</b> {planting_targets.capacity} </h6>
                <h6><b>Tree Types:</b> {planting_targets.tree_type.join(", ")} </h6>
                <h6><b>Location:</b> {planting_targets.location} </h6>
                <h6><b>Number Planted:</b> {planting_targets.number_planted} </h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <br></br>
        <Row>
          <br></br>
          <br></br>
          <Col sm={3}><h4>Images:</h4></Col>
        </Row>
        <Row>
          {images.map((image, index) => (
            <Col xs={5} sm={4} lg={3} key={index}>
              <img src={image}></img>
            </Col>
          ))}
        </Row>
        <br></br>
        <Row>
          <br></br>
          <br></br>
          <Col><h4>Notes:</h4></Col>
          {notes.map((note, index) => (
            <Col sm={12} key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Written by: {note.author}</Card.Subtitle>
                  <Card.Text>{note.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  )
}

export default SiteCard;