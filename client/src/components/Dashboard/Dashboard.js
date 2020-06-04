import React, { useState } from "react";
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
import DashboardHome from "./Home/DashboardHome";
import RegionForm from "./Regions/NewRegionForm/RegionForm";
import SiteForm from "./Sites/NewSiteForm/SiteForm";
import AdminForm from "./Persons/NewPerson/NewAdminForm";
import UserForm from "./Persons/NewPerson/NewUserForm";
import EventForm from "./Events/NewEvent/NewEventForm";
import SourceForm from "./Seedlings/NewSource/NewSourceForm";
import UpdateAdminForm from "./Persons/UpdatePerson/UpdatePersonForm";
import UpdateUserForm from "./Persons/UpdatePerson/UpdatePersonForm";
import UpdateEventForm from "./Events/UpdateEventsForm/UpdateEventsForm";
import UpdateSourceForm from "./Seedlings/UpdateSourceForm/UpdateSourceForm";
import UpdateRegionForm from "./Regions/UpdateRegionForm/updateRegionForm";
import UpdateSiteForm from "./Sites/UpdateSiteForm/UpdateSiteForm";
import "./assets/style.css";
import Navbar from "../Navbar/Navbar";
import Login from "../authComponents/Login/Login";


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

                  <Route exact path="/dashboard/home" component={DashboardHome} />

                  <Route exact path="/dashboard/regions" component={RegionDisplay} />

                  <Route exact path="/dashboard/sites" component={SiteDisplay} />

                  <Route exact path="/dashboard/events" component={EventDisplay} />

                  <Route exact path="/dashboard/source" component={SourceDisplay} />

                  <Route exact path="/dashboard/persons" component={PersonsDisplay} />

                  <Route exact path="/dashboard/newRegion" component={RegionForm} />

                  <Route exact path="/dashboard/newSite" component={SiteForm} />

                  <Route exact path="/dashboard/newAdmin" component={AdminForm} />

                  <Route exact path="/dashboard/newPerson" component={UserForm} />

                  <Route exact path="/dashboard/newEvent" component={EventForm} />

                  <Route exact path="/dashboard/newSource" component={SourceForm} />

                  <Route exact path="/dashboard/updateRegion" component={UpdateRegionForm} />

                  <Route exact path="/dashboard/updateSite" component={UpdateSiteForm} />

                  <Route exact path="/dashboard/updateAdmin/:id" component={UpdateAdminForm} />

                  <Route exact path="/dashboard/updatePerson/:id" component={UpdateUserForm} />

                  <Route exact path="/dashboard/updateEvent" component={UpdateEventForm} />

                  <Route exact path="/dashboard/updateSource" component={UpdateSourceForm} />

                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
    </>
  )
}

export default Dashboard;