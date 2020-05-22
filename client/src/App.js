import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./views/Home/Home";

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Switch>
        <Route path="/" component={ Home } />
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
