import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideMenu from "./SideMenu/SideMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegionDisplay from "./Regions/RegionDisplay/RegionDisplay";


const Dashboard = () => {

  return (
    <>
      <Router>
        <Row>
          <Col s={12} md={3} className="sideMenuCol">
            <SideMenu />
          </Col>
          <Col s={12} md={9}>
            <Switch>
              <Route exact path="/dashboard/regions">
                <RegionDisplay />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </>
  )
}

export default Dashboard;