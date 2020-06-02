import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router } from "react-router-dom";
import UserEventDisplay from "../GetInvolved/UserEvents/UserEventDisplay";
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
      console.log(events);
    }
    fetchData();
    
  }, []);
  console.log(events);
  return (
    <>
    <Header />
      <Router>
        <Container fluid>
          <Row>
            <Col xs={6} className="contentView">
              <UserEventDisplay events={eventState.events} />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
};

export default GetInvolved;
