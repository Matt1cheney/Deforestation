import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Volunteer from './components/GetInvolved/VolunteerForm/volunteer';
import ReforestationMap from "./components/Reforestation/ReforestationMap";

function App() {
  return (
    <>
    <Router>
        <>
          <Navbar />
          <Switch>
          <Route exact path="/" component={ Home } />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/volunteer" component={Volunteer}/>
            <Route path="/reforestation" component={ReforestationMap} />
          </Switch>
        </>
    </Router>
    </>
  );
}

export default App;
