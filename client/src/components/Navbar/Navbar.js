import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from 'react-bootstrap/Dropdown';
// import SplitButton from 'react-bootstrap/SplitButton';
// import Nav from 'react-bootstrap/Nav'


const NavComp = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="/">ReforestNation</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Get Involved" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/volunteer">Volunteer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Seedlings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Landowner</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Get Info" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Reforestation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/dashboard">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavComp