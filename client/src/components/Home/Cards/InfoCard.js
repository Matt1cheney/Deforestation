import React from "react";
import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import City from "../../../images/City.jpeg";
import Road from "../../../images/Road.jpeg";

import "./InfoCard.css";

export class InfoCard extends React.Component {
  render() {
    return (
      <Container>
        <Row className="bottom">
          <Col xs={12} md={6}>
            <Link to="/information">
              <Image className="infoLinks" src={City} />
              <p className="centered">About Us</p>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to="/information">
              <Image className="infoLinks" src={Road} />
              <p className="centered">Reforestation</p>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InfoCard;

