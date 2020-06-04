import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Volunteer from './components/GetInvolved/VolunteerForm/volunteer';
import ReforestationMap from "./components/Reforestation/ReforestationMap";
import InformationView from "./components/Information/InformationView";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import Login from "./components/authComponents/Login/Login";
import SourceInquire from "./components/GetInvolved/Source/Source";
import { AuthProvider } from "./components/authComponents/userAuth/Auth"

function App() {
  return (
    <Router>
      <AuthProvider>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/getInvolved" component={GetInvolved} />
            <Route path="/reforestation" component={ReforestationMap} />
            <Route path="/information" component={InformationView} />
            <Route path="/sourceInquire" component={SourceInquire} />
          </Switch>
        </>
      </AuthProvider>
    </Router>
  );
}

export default App;
