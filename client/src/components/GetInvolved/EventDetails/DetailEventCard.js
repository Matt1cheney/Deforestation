import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plant from "../../../images/Plant.jpeg";
import moment from "moment";
import { Link } from "react-router-dom";
import "./EventDetail.css";
import VolunteerForm from "../VolunteerForm/volunteer";

const DetailEventCard = ({ event }) => {
  const { site, startDate, endDate, description, _id, coordinator, region } = event;
  console.log(region);

  return (
    <>
      <Card style={{ width: "100%" }} className="eventCard">
      <Card.Title><h3>{site && site.name}</h3></Card.Title>
        <Row className="justify-content-center">
          <Col className="date">
            {moment(startDate).format("MM/DD/YYYY")} -{" "}
            {moment(endDate).format("MM/DD/YYYY")}
          </Col>
        </Row>
        <Col className="cardImage">
          <Card.Img className="cardImage" variant="top" src={Plant} />
                  <Card className="descriptionCard">{description}</Card>
        </Col>
        <Card.Body>
          <Row>
            
            <Col >
              <Row className="coordinator">Thank you to the coordinator of this event -{coordinator && coordinator.name}!</Row>
            </Col>
          </Row>

        </Card.Body>
        <Link as="button" className="btn return" style={{color: "white"}} to="/getInvolved">Return To Events Page</Link>
      </Card>
      <VolunteerForm region={region && region._id} event={_id}/>
    </>
  );
};

export default DetailEventCard;
