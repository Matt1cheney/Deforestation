import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import  { Link }  from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <Dropdown as={ButtonGroup} className="getBtn">

          <Button as={Link} to="/getInvolved" variant="success">Get Involved</Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>


            <NavDropdown.Item as={Link} to="/resource">Resources</NavDropdown.Item>

            </Dropdown.Menu>

          </Dropdown>

          <Link to="/"><h1>ReforestNation</h1></Link>

          <Dropdown as={ButtonGroup} className="infoBtn">

          <Button as={Link} variant="success" to="/information">Get Information</Button>

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