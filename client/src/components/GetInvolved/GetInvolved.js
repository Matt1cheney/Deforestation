import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router } from "react-router-dom";
import UserEventDisplay from "../GetInvolved/UserEvents/UserEventDisplay";
import API from "../../utils/API";
import Header from "../Header/Header";
import "./getInvolved.css";

const GetInvolved = ({ events }) => {
  const [eventState, setEventState] = useState({
    events: [],
  });

  useEffect(() => {
    async function fetchData() {
      await API.getAllEvents().then((res) =>
        setEventState({ ...eventState, events: res.data })
      );
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="getInvolved">
        <Header />
        <Router>
          <Container fluid>
            <Row className="eventDisplay">
              <UserEventDisplay events={eventState.events} />
            </Row>
          </Container>
        </Router>
      </div>
    </>
  );
};

export default GetInvolved;
