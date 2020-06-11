import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";

const SiteCard = ({ site, onDelete, this3 }) => {
  const {
    _id,
    profileImage,
    additionalImages,
    name,
    region,
    coordinator,
    owner,
    address,
    status,
    plantingTarget,
    notes,
    contract,
    latitude,
    longitude,
    document
  } = site;

  var map_link_url = latitude && longitude ? `http://www.google.com/maps/place/${latitude},${longitude}` : "";


  return (
    <Card className="dashboardCard">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>
              <h3>{name ? name : "N/A"}</h3>
            </Card.Title>
          </Col>
          <Col>
            <Link
              as="button"
              className="btn align-right color-white"
              to={{
                pathname: `/dashboard/updateSite`,
                site: site,
              }}
            >
              <svg
                className="bi bi-pencil-square"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </Link>
            <Button
              className="btn align-right"
              variant="dark"
              onClick={() => onDelete(_id, this3)}
            >
              <svg
                className="bi bi-trash"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fillRule="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </Button>
          </Col>
        </Row>
        <Row>
        <Col md={2} lg={2} xl={2}>
            <img className="siteImg" src={profileImage && `http://localhost:4000/api/get-file/${profileImage}`} alt="profileImage"></img>
          </Col>
          <Col md={7} lg={8} xl={9}>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <h6>
                  <b>Region:</b> {region && region.name && region.name}
                </h6>
                <h6>
                  <b>Owner:</b> {owner && owner.name && owner.name}
                </h6>
                <h6>
                  <b>Coordinator:</b>{" "}
                  {coordinator && coordinator.name && coordinator.name}
                </h6>
                <h6>
                  <b>location:</b>
                  {latitude && longitude ? (
                    <a href={map_link_url} target="_blank" rel="noreferrer">
                      {latitude}/{longitude}
                    </a>
                  ) : (
                      "N/A"
                    )}
                </h6>
                <p>
                  <b>Address:</b> {address && address.street && address.street} <br></br>
                  {address && address.city && address.city},{" "}
                  {address && address.state && address.state}, {address && address.zip && address.zip}
                </p>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <h6>
                  <b>Status:</b> {status ? status : "N/A"}
                </h6>
                <h6>
                  <b>Capacity: </b>
                  {plantingTarget && plantingTarget.capacity ? plantingTarget.capacity : "N/A"}
                </h6>
                <h6>
                  <b>Tree Types: </b>
                  {plantingTarget && plantingTarget.tree_type ? plantingTarget.tree_type : "N/A"}
                </h6>
                <h6>
                  <b>Location: </b>
                  {plantingTarget && plantingTarget.location ? plantingTarget.location : "N/A"}
                </h6>
                <h6>
                  <b>Number Planted: </b>
                  {plantingTarget && plantingTarget.number_planted
                    ? plantingTarget.number_planted
                    : "N/A"}
                </h6>
                {
                  document ?
                    <h6>
                      <b>Document Link: </b>
                      
                      <a href={`http://localhost:4000/api/get-file/${document}`} target="_blank" rel="noreferrer">Pdf</a>
                    </h6>
                  : null
                }

              </Col>
              <Col sm={12} md={12} lg={12}>
                <p>
                  <b>Notes:</b> <br></br>
                  {notes ? notes : "N/A"}
                </p>
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
        {additionalImages &&
            additionalImages.map(
              (image, index) =>
                image && (
                  <Col xs={5} sm={4} lg={3} key={index} className="pb-5">
                    <img className="siteImg" src={`http://localhost:4000/api/get-file/${image}`} alt="additional Images"></img>
                  </Col>
                )
            )}
          {
            contract &&
            <Col xs={5} sm={4} lg={3} className="pb-5">
              <img src={`http://localhost:4000/api/get-file/${contract}`} alt="contract"></img>
            </Col>
          }

        </Row>
        <br></br>
      </Card.Body>
    </Card>
  );
};

export default SiteCard;