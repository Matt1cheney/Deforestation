import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router } from "react-router-dom";
import EventDisplay from "../GetInvolved/UserEvents/UserEventDisplay";
import API from "../../utils/API";
import Header from "../Header/Header";

const GetInvolved = ({ events }) => {
  const [eventState, setEventState] = useState({
    events: [],
  });

  useEffect(() => {
    async function fetchData() {
      await API.getEvents().then((res) =>
        setEventState({ ...eventState, events: res.data })
      );
    }
    fetchData();
  }, []);

  return (
    <>
    <Header />
      <Router>
        <Container fluid>
          <Row>
            
            <Col className="dashboardContentView">
              <EventDisplay events={eventState.events} />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
};

export default GetInvolved;
