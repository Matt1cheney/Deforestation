import React from "react";
import Header from "../../Header/Header";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import GreenhouseImg from "../../../images/greenhouse.jpg"
import LandImg from "../../../images/land.jpg"
import Footer from "../../Footer/Footer";



const SourceInquire = () => {

  return (
    <div className="resourcePage">
      <Header />
      <Container className="resourceContainer">
        <Row className="justify-content-center">
          <p className="resourceTopText">Help make our vision a reality.</p>
        </Row>
        <Row>
          <Col xs={12} md={6} className="resourceText">
            <h3>Seedlings</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="mailto:info@appleseedinitiative.org">Email Us</a>
          </Col>
          <Col xs={12} md={6}>
            <Image className="resourceImg" src={GreenhouseImg}/>
          </Col>
        </Row>
        <Row className="resourceRow">
          <Col xs={12} md={6} className="resourceText">
            <h3>Land</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="mailto:info@appleseedinitiative.org">Email Us</a>
          </Col>
          <Col xs={12} md={6} >
            <Image src={LandImg} className="resourceImg"/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default SourceInquire;