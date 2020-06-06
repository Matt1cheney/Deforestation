import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plant from "../../../images/Plant.jpeg";
import moment from "moment";
import { Link } from "react-router-dom";

const DetailEventCard = ({ event }) => {
  

  const { site, startDate, endDate, description, _id, coordinator } = event;
  console.log(event);

  return (
    <>

      <Card style={{ width: '100%' }} className="eventCard">
        <Card.Img variant="top" src={Plant} />
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Row>
                  <Col>
                {description}
                </Col>
              </Row>
              <Row>
                <Col>
                Event Date: <br></br>
            {moment(startDate).format("MM/DD/YYYY")} -{" "}
            {moment(endDate).format("MM/DD/YYYY")}
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Row>
                {coordinator && coordinator.name}
              </Row>
            </Col>
          </Row>
          
            <h3>{site && site.name}</h3>
          
       
          
        </Card.Body>
      </Card>
    </>
  );
};

export default DetailEventCard;
