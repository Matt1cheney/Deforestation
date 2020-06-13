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
  const { site, startDate, endDate, description, _id, region } = event;

  return (
    <>
      <Col>
          <Card className="userEventCard">
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title className="Eventcard-title">
                <h3>{site && site.name}</h3>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Event Date: <br></br>
                {moment(startDate).format("MM/DD/YYYY")} -{" "}
                {moment(endDate).format("MM/DD/YYYY")}
              </Card.Subtitle>
              <Card.Text className="description">{description}</Card.Text>
              {/* <p>{region}</p> */}
            </Card.Body>
            <Link as="button" className="btn return" style={{color: "white"}} to={`/event/${_id}`} >View Event</Link>
          </Card>
      </Col>
    </>
  );
};
export default UserEventCard;
