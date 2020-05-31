import React, {useState, useEffect} from "react";
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
import AdminForm from "./Persons/NewPerson/NewAdminForm";
import UserForm from "./Persons/NewPerson/NewUserForm";
import EventForm from "./Events/NewEvent/NewEventForm";
import SourceForm from "./Seedlings/NewSource/NewSourceForm";
import UpdateAdminForm from "./Persons/UpdatePerson/UpdatePersonForm";
import UpdateUserForm from "./Persons/UpdatePerson/UpdatePersonForm";
import UpdateEventForm from "./Events/UpdateEventsForm/UpdateEventsForm";
import UpdateRegionForm from "./Regions/UpdateRegionForm/updateRegionForm";
import UpdateSiteForm from "./Sites/UpdateSiteForm/UpdateSiteForm";
import "./assets/style.css";
import Navbar from "../Navbar/Navbar";
import API from "../../utils/API";
import Login from "../authComponents/Login/Login";
import { AuthProvider } from "../authComponents/userAuth/Auth";



const Dashboard = () => {

  const [regionState, setRegionState] = useState({
    regions: []
  });
  const [personsState, setPersonsState] = useState({
    persons: []
  });
  const [sitesState, setSitesState] = useState({
    sites: []
  });
  const [eventState, setEventState] = useState({
    events: []
  });
  const [sourceState, setSourceState] = useState({
    sources: []
  });

  return (
    <>
    <Navbar />
    <AuthProvider>
      <Router>
        <Container fluid>
        <Row>
          <Col xs={12} md={3} className="sideMenuCol">
            <SideMenu />
          </Col>
          <Col xs={12} md={9} className="dashboardContentView">
            <Switch>
              
              <Route exact path ="/dashboard/login" component={Login} ></Route>
              <Route exact path="/dashboard/regions">
                <RegionDisplay regions={regionState.regions}/>
              </Route>
              <Route exact path="/dashboard/sites">
                <SiteDisplay sites={sitesState.sites}/>
              </Route>
              <Route exact path="/dashboard/events">
                <EventDisplay events={eventState.events}/>
              </Route>
              <Route exact path="/dashboard/source">
                <SourceDisplay sources={sourceState.sources}/>
              </Route>
              <Route exact path="/dashboard/persons">
                <PersonsDisplay persons={personsState.persons}/>
              </Route>
              <Route exact path="/dashboard/newRegion">
                <RegionForm persons={personsState.persons}/>
              </Route>
              <Route exact path="/dashboard/newSite">
                <SiteForm regions={regionState.regions} persons={personsState.persons}/>
              </Route>
              <Route exact path="/dashboard/newAdmin">
                <AdminForm regions={regionState.regions}/>
              </Route>
              <Route exact path="/dashboard/newPerson">
                <UserForm regions={regionState.regions}/>
              </Route>
              <Route exact path="/dashboard/newEvent">
                <EventForm sites={sitesState.sites} persons={personsState.persons}/>
              </Route>
              <Route exact path="/dashboard/newSource">
                <SourceForm regions={regionState.regions} sites={sitesState.sites} persons={personsState.persons}/>
              </Route>
              <Route exact path="/dashboard/newSource">
                <SourceForm regions={regionState.regions} sites={sitesState.sites} persons={personsState.persons}/>
              </Route>
            </Switch>
          </Col>
        </Row>
        </Container>
      </Router>
    </AuthProvider>
    </>
  )
}

export default Dashboard;