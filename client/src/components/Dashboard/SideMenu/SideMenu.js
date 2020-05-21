import React from "react";
import "./style.css"
import Button from "react-bootstrap/Button";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const SideMenu = () => {

  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Menu" className="sideMenuDropdown">
        <Dropdown.Item href="/dashboard/regions" className="sideMenuItems">Regions</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="sideMenuItems">Events</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="sideMenuItems">Sites</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="sideMenuItems">Seedlings</Dropdown.Item>
      </DropdownButton>
      <div className="sideMenu">
        <Button href="/dashboard/regions" block>Regions</Button>
        <Button block>Sites</Button>
        <Button block>Events</Button>
        <Button block>Seedlings</Button>
      </div>
    </>
  )
}

export default SideMenu;