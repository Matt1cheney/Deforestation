import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
import app from "../authComponents/userAuth/baseAuth";
import { Link } from "react-router-dom";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from 'react-bootstrap/Dropdown';
// import SplitButton from 'react-bootstrap/SplitButton';
// import Nav from 'react-bootstrap/Nav'


const NavComp = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" >
        <Navbar.Brand ><Link to="/">ReforestNation</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Get Involved" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/getInvolved">Volunteer</NavDropdown.Item>
              <NavDropdown.Item href="/resource">Resources</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/information">Get Information</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/" onClick={() => app.auth().signOut()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavComp