import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import SplitButton from "react-bootstrap/SplitButton";
import "./Header.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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
              <Dropdown.Item href="/getInvolved">Volunteer</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Seedlings</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Landowner</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <h1>ReforestNation</h1>
          <Dropdown as={ButtonGroup}>
            <Button variant="success" href="/information">Get Information</Button>
            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">About Us</Dropdown.Item>
              <Dropdown.Item href="/reforestation">Reforestation</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="right">
          <a href="/dashboard">
            <button className="log">Log In</button>
          </a>
        </div>
      </>
    );
  }
}