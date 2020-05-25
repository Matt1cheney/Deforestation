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
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <h1>ReforestNation</h1>
          <Dropdown as={ButtonGroup}>
            <Button variant="success">Get Information</Button>
            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="right">
          <button className="log">
            <a href="/dashboard"></a>Log In
          </button>
        </div>
      </>
    );
  }
}
