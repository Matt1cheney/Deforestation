import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "./Header.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import  { Link }  from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <Dropdown as={ButtonGroup} className="getBtn">
          <Link to="/getInvolved"><Button variant="success">Get Involved</Button>
            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            /></Link>
            <Dropdown.Menu>
            {/* <Dropdown.Item><Link to="/getInvolved">Volunteer</Link></Dropdown.Item> */}
            <Dropdown.Item variant="success"><Link to="/resource">Resources</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/"><h1>ReforestNation</h1></Link>
          <Dropdown as={ButtonGroup} className="infoBtn">
          <Link to="/information"><Button variant="success">Get Information</Button></Link>
            {/* <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            /> */}
            {/* <Dropdown.Menu>
              <Dropdown.Item><Link to="/information">About Us</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/information">Reforestation</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/information">Contact</Link></Dropdown.Item>
            </Dropdown.Menu> */}
          </Dropdown>
        </div>
        <div className="right">
          <Link to="/login">
            <button className="loginButton">Log In</button>
          </Link>
        </div>
      </>
    );
  }
}