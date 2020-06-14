import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import DetailEventCard from "./DetailEventCard";

const EventDetails = ({ events }) => {
  const [detailState, setDetailState] = useState({
    event: {},
  });
  const { id } = useParams();

  useEffect(() => {
    API.getEventById(id)
      .then(res => {
        setDetailState({ ...detailState, event: res.data })
      });
  }, []);

  return (
    <div className="detailBackground">
      {/* <Row>

        <Col sm={12}>
          <h1 className="eventTitle">Event Details</h1>
        </Col>
      </Row> */}
      <Row>
        <Col sm={{ span: 6, offset: 3 }}>
          <div className="event-detail-wrapper">

            <DetailEventCard event={detailState.event}/>

            {/* <Link className="return" to="/getInvolved">Return To Events Page</Link> */}

          </div>
        </Col>
      </Row>

    </div>
  );
};
export default EventDetails;
