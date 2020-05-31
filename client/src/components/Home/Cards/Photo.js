import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Hands from "../../../images/Hands.jpeg";
import Tree from "../../../images/Tree.jpeg";
import Forest from "../../../images/Forest.jpeg";
import "./Photo.css";
import { Link } from "react-router-dom";




export class Photo extends React.Component {
    render() {
        return (
            <Container>
            <Row>
              <Col xs={6} md={4}>
                <Link to href="/volunteer"><Image src={Hands}  />
                <p className="centered">Volunteer</p></Link>
              </Col>
              <Col xs={6} md={4}>
                <Link to href="/volunteer"><Image src={Tree} />
                <p className="centered">Land?</p></Link>

              </Col>
              <Col xs={6} md={4}>
                <Link to href="/volunteer"><Image src={Forest} />
                <p className="centered">Resources?</p></Link>
              </Col>
            </Row>
          </Container>
        )
    }
}

export default Photo
