  
import React from "react";
import "./style.css"
import Button from "react-bootstrap/Button";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const SideMenu = () => {

  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Menu" className="sideMenuDropdown" variant="dark">
        <Dropdown.Item href="/dashboard/regions" className="sideMenuItems">Regions</Dropdown.Item>
        <Dropdown.Item href="/dashboard/sites" className="sideMenuItems">Sites</Dropdown.Item>
        <Dropdown.Item href="/dashboard/events" className="sideMenuItems">Events</Dropdown.Item>
        <Dropdown.Item href="/dashboard/source" className="sideMenuItems">Source</Dropdown.Item>
        <Dropdown.Item href="/dashboard/persons" className="sideMenuItems">People</Dropdown.Item>
      </DropdownButton>
      <div className="sideMenu">
        <Button href="/dashboard/regions" className="btn" variant="dark" block>Regions</Button>
        <Button href="/dashboard/sites" className="btn" variant="dark" block>Sites</Button>
        <Button href="/dashboard/events" className="btn" variant="dark" block>Events</Button>
        <Button href="/dashboard/source" variant="dark" block>Source</Button>
        <Button href="/dashboard/persons" variant="dark" block>People</Button>
      </div>
    </>
  )
}

export default SideMenu;
