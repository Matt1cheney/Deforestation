import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SideMenu from "./SideMenu/SideMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegionDisplay from "./Regions/RegionDisplay/RegionDisplay";
import SiteDisplay from "./Sites/SiteDisplay/SiteDisplay";
import EventDisplay from "./Events/EventDisplay/EventDisplay";
import SourceDisplay from "./Seedlings/SourceDisplay/SourceDisplay";
import PersonsDisplay from "./Persons/PersonsDisplay/PersonsDisplay";
import RegionForm from "./Regions/NewRegionForm/RegionForm";
import SiteForm from "./Sites/NewSiteForm/SiteForm";
import PersonForm from "./Persons/NewPerson/NewPersonForm";
import "./assets/style.css";
import Navbar from "../Navbar/Navbar";



const Dashboard = () => {

  return (
    <>
    <Navbar />
      <Router>
        <Container fluid>
        <Row>
          <Col xs={12} md={3} className="sideMenuCol">
            <SideMenu />
          </Col>
          <Col xs={12} md={9} className="dashboardContentView">
            <Switch>
              <Route exact path="/dashboard/regions">
                <RegionDisplay />
              </Route>
              <Route exact path="/dashboard/sites">
                <SiteDisplay />
              </Route>
              <Route exact path="/dashboard/events">
                <EventDisplay />
              </Route>
              <Route exact path="/dashboard/source">
                <SourceDisplay />
              </Route>
              <Route exact path="/dashboard/persons">
                <PersonsDisplay />
              </Route>
              <Route exact path="/dashboard/newRegion">
                <RegionForm />
              </Route>
              <Route exact path="/dashboard/newSite">
                <SiteForm />
              </Route>
              <Route exact path="/dashboard/newPerson">
                <PersonForm />
              </Route>
            </Switch>
          </Col>
        </Row>
        </Container>
      </Router>
    </>
  )
}

export default Dashboard;