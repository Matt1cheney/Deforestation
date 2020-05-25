import React from "react";
import Fbook from "../../images/Fbook.svg";
import Email from "../../images/Email.svg";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <>
      
        <div className="footer">
          <a href="https://www.facebook.com/Appleseed-Initiative-101798068060276">
            <img src={Fbook} alt="facebook" />
          </a>
          <a><img src={Email} alt="Email" /></a>
        </div>
     
    </>
  );
}
