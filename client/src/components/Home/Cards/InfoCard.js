import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import City from "../../../images/City.jpeg";
import Road from "../../../images/Road.jpeg";

import "./Photo.css";

export class InfoCard extends React.Component {
  render() {
    return (
      <Container>
        <Row className="bottom">
          <Col xs={6} md={6}>
            <a href="/information">
              <Image src={City} />
              <p className="centered">About Us</p>
            </a>
          </Col>
          <Col xs={6} md={6}>
            <a href="/information">
              <Image src={Road} />
              <p className="centered">Reforestation</p>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InfoCard;