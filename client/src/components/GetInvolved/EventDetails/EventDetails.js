import React, {useState, useEffect } from "react";
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
    async function fetchData() {
      await API.getEventById(id)
      .then(res => {
        
        
        //Here we have all the event data
        console.log(res.data.coordinator);
        API.getPersonById(res.data.coordinator)
        .then(res2 => {

          console.log(res2);
          let singleEvent = res.data;
          singleEvent.coordinator = res2.data;
          setDetailState({ ...detailState, event: singleEvent })

        })
      });
      
    }
    fetchData();
  }, []);

  return (
      <>
      <Row>
        <Col sm={12}>
          <h1 style={{'text-align': "center"}}>Event Details</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 6, offset: 3}}>
          <div className="event-detail-wrapper">
            
            <DetailEventCard event={detailState.event} />
            
            <Link to="/getInvolved">return</Link>
            
          </div>
        </Col>
      </Row>
    </>
  );
};
export default EventDetails;
