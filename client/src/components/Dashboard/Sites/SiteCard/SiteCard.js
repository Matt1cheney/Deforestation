import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../../../utils/API";
import "../style.css";

const SiteCard = ({ site }) => {
  const {
    profile_image,
    name,
    region,
    coordinator,
    owner,
    address,
    status,
    plantingTarget,
    notes,
    images,
    latitude,
    longitude
  } = site;

  var map_link_url = `http://www.google.com/maps/place/${latitude},${longitude}`

  const onDelete = async (event) => {
    try {
      const response = await API.deleteSite(name);
      alert(response.data.message);
      alert("Site Deleted");
      window.location.reload(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Card className="dashboardCard">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>
              <h3>{name}</h3>
            </Card.Title>
          </Col>
          <Col>
            <Button
              className="btn align-right"
              variant="dark"
              onClick={onDelete}
            >
              <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={5} lg={4} xl={3}>
            <img src={profile_image}></img>
          </Col>
          <Col md={7} lg={8} xl={9}>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <h6>
                  <b>Region:</b> {region && region.name && (region.name)}
                </h6>
                <h6>
                  <b>Owner:</b> {owner && owner.name && (owner.name)}
                </h6>
                <h6>
                  <b>Coordinator:</b> {coordinator && coordinator.name}
                </h6>
                <h6>
                  <b>location:</b> <a href={map_link_url} target="_blank">{latitude}/{longitude}</a>
                </h6>
                <p>
                  <b>Address:</b> {address}
                </p>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <h6>
                  <b>Status:</b> {status}
                </h6>
                <h6>
                  <b>Capacity:</b>
                  {plantingTarget ? plantingTarget : ""}
                </h6>
                {/* <h6>
                  <b>Tree Types:</b>
                  {planting_targets
                    ? planting_targets.tree_type.join(", ")
                    : ""}
                </h6>
                <h6>
                  <b>Location:</b>
                  {planting_targets ? planting_targets.location : ""}
                </h6>
                <h6>
                  <b>Number Planted:</b>
                  {planting_targets ? planting_targets.number_planted : ""}
                </h6> */}
              </Col>
            </Row>
          </Col>
        </Row>
        <br></br>
        <Row>
          <br></br>
          <br></br>
          <Col sm={3}>
            <h4>Images:</h4>
          </Col>
        </Row>
        <Row>
          {images &&
            images.map((image, index) => (
              <Col xs={5} sm={4} lg={3} key={index}>
                <img src={image}></img>
              </Col>
            ))}
        </Row>
        <br></br>
        <Row>
          <br></br>
          <br></br>
          <Col>
            <h4>Notes:</h4>
          </Col>
          {notes !== null
           && notes.map((note, index) => (
              <Col sm={12} key={index}>
                <Card>
                  <Card.Body>
                    <Card.Title>{note ? note.title : ""}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Written by: {note ? note.author : ""}
                    </Card.Subtitle>
                    <Card.Text>{note ? note.text : ""}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SiteCard;
