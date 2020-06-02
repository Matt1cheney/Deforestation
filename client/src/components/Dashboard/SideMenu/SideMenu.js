import React from "react";
import "./style.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <>
      <DropdownButton
        id="dropdown-basic-button"
        title="Menu"
        className="sideMenuDropdown"
        variant="dark"
      >
        <Dropdown.Item className="sideMenuItems">
          <Link to={{ pathname: `/dashboard/regions` }}>Regions</Link>
        </Dropdown.Item>
        <Dropdown.Item className="sideMenuItems">
          <Link to={{ pathname: `/dashboard/sites` }}>Sites</Link>
        </Dropdown.Item>
        <Dropdown.Item className="sideMenuItems">
          <Link to={{ pathname: `/dashboard/events` }}>Events</Link>
        </Dropdown.Item>
        <Dropdown.Item className="sideMenuItems">
          <Link to={{ pathname: `/dashboard/source` }}>Source</Link>
        </Dropdown.Item>
      </DropdownButton>
      <div className="sideMenu">
        <Link
          className="btn color-white"
          variant="dark"
          style={{ width: "100%", marginBottom: 10 }}
          to={{ pathname: `/dashboard/regions` }}
        >
          Regions
        </Link>

        <Link
          className="btn color-white"
          variant="dark"
          style={{ width: "100%", marginBottom: 10 }}
          to={{ pathname: `/dashboard/sites` }}
        >
          Sites
        </Link>

        <Link
          className="btn color-white"
          variant="dark"
          style={{ width: "100%", marginBottom: 10 }}
          to={{ pathname: `/dashboard/events` }}
        >
          Events
        </Link>

        <Link
          className="btn color-white"
          variant="dark"
          style={{ width: "100%", marginBottom: 10 }}
          to={{ pathname: `/dashboard/source` }}
        >
          Source
        </Link>

        <Link
          className="btn color-white"
          variant="dark"
          style={{ width: "100%", marginBottom: 10 }}
          to={{ pathname: `/dashboard/persons` }}
        >
          Persons
        </Link>
      </div>
    </>
  );
};

export default SideMenu;