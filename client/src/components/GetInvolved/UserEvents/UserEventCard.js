import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plant from "../../../images/Plant.jpeg";
import moment from "moment";
import { Link } from "react-router-dom";
import "./UserEventCard.css";

const UserEventCard = ({ event }) => {
  const { site, startDate, endDate, description, _id } = event;

  return (
    <>
    <Col>

      <Card className="userEventCard">
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            <h3>{site && site.name}</h3>
          </Card.Title>
          <Card.Text>{description}</Card.Text>

          <Card.Subtitle className="mb-2 text-muted">
            Event Date: <br></br>
            {moment(startDate).format("MM/DD/YYYY")} -{" "}
            {moment(endDate).format("MM/DD/YYYY")}
          </Card.Subtitle>

          <Button href={`/event/${_id}`}>View Event</Button>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
};

export default UserEventCard;
