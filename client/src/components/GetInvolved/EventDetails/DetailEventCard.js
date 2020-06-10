import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plant from "../../../images/Plant.jpeg";
import moment from "moment";
import { Link } from "react-router-dom";
import "./EventDetail.css";

const DetailEventCard = ({ event }) => {
  const { site, startDate, endDate, description, _id, coordinator } = event;
  console.log(event);

  return (
    <>
      <Card style={{ width: "100%" }} className="eventCard">
        <Row>
          <Col className="date">JOIN US ON<br></br>
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

          <h3>{site && site.name}</h3>
        </Card.Body>
      </Card>
    </>
  );
};

export default DetailEventCard;
