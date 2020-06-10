import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import SplitButton from "react-bootstrap/SplitButton";
import "./Header.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import  { Link }  from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <Dropdown as={ButtonGroup}>
            <Button variant="success">Get Involved</Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item><Link to="/getInvolved">Volunteer</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/sourceInquire">Seedlings</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/landInquire">Landowner</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <h1>ReforestNation</h1>
          <Dropdown as={ButtonGroup}>
            <Button variant="success" ><Link to="/information">Get Information</Link></Button>
            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item><Link to="#/action-1">About Us</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/reforestation">Reforestation</Link></Dropdown.Item>
              <Dropdown.Item><Link to="#/action-3">Contact</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="right">
          <Link to="/login">
            <button className="log">Log In</button>
          </Link>
        </div>
      </>
    );
  }
}