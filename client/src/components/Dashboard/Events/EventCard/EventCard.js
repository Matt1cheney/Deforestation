import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import "../style.css";

const EventCard = ({ event, onDelete, onVolunteerDelete, this3 }) => {
  const {
    _id,
    site,
    startDate,
    endDate,
    coordinator,
    region,
    description,
    volunteers,
  } = event;

  let formatterStartDate = startDate ? moment(startDate).format("MM/DD/YYYY") : "N/A"
  let formatterEndDate = endDate ? moment(endDate).format("MM/DD/YYYY") : "N/A"
  
  return (
    <Card className="dashboardCard">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>
              <h3>{site && site.name ? site.name : "N/A"}</h3>
            </Card.Title>
          </Col>
          <Col>
            <Link
              as="button"
              className="btn align-right color-white"
              to={{
                pathname: `/dashboard/updateEvent`,
                event: event
              }}
            >
              <svg className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </Link>
            <Button
              className="btn align-right"
              variant="dark"
              onClick={() => onDelete(_id, this3)}
            >
              <svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </Button>
          </Col>
        </Row>
         <Card.Subtitle className="mb-2 text-muted">
          {formatterStartDate} - {formatterEndDate}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          <b>Coordinator: </b> {coordinator ? coordinator.name : "N/A"}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          <b>Region: </b> {region ? region.name : "N/A"}
        </Card.Subtitle>
        {description && (
          <Card.Text>
            <b>Description: </b>
            {description ? description : "N/A"}
          </Card.Text>
        )}
        <Card.Subtitle className="mb-2">
          <b>Volunteers: </b>
        </Card.Subtitle>
        <Row>
          {volunteers &&
            volunteers.map((person, index) => (
              <Col lg={4} s={6} xs={12} key={index}>
                <Card className="volunteerCard">
                  <Card.Body>
                    <h5>{person.name ? person.name : "N/A"}</h5>
                    <i className="fas fa-phone"></i>
                    <span>{person.phone ? person.phone : "N/A"}</span>
                    <br></br>
                    <i className="fas fa-envelope-square"></i>
                    <span>{person.email ? person.email : "N/A"}</span>
                    <br></br>
                    <Button 
                      className="btn eventBtn" 
                      size="sm" 
                      variant="dark" 
                      onClick={() => onVolunteerDelete(event, person._id, this3)}>
                      <svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
