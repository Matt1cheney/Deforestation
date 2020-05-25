import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Hands from "../../../images/Hands.jpeg";
import Tree from "../../../images/Tree.jpeg";
import Forest from "../../../images/Forest.jpeg";
import "./Photo.css";




export class Photo extends React.Component {
    render() {
        return (
            <Container>
            <Row>
              <Col xs={6} md={4}>
                <a href="/volunteer"><Image src={Hands}  />
                <p className="centered">Volunteer</p></a>
              </Col>
              <Col xs={6} md={4}>
                <a href="/volunteer"><Image src={Tree} />
                <p className="centered">Land?</p></a>

              </Col>
              <Col xs={6} md={4}>
                <a href="/volunteer"><Image src={Forest} />
                <p className="centered">Resources?</p></a>
              </Col>
            </Row>
          </Container>
        )
    }
}

export default Photo
