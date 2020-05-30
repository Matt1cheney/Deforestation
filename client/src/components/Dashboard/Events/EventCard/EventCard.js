import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import API from "../../../../utils/API";
import "../style.css";

const EventCard = ({ event }) => {
  const {
    _id,
    site,
    startDate,
    endDate,
    coordinator,
    description,
    volunteers,
  } = event;

  const onDelete = async (event) => {
    try {
      const response = await API.deleteEvent(_id);
      alert("Deleted");
      window.location.reload(true);
    } catch (err) {
      alert(err.message);
    }
  };

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
            <Button
              className="btn align-right"
              variant="dark"
              onClick={onDelete}
            >
              <svg
                class="bi bi-trash"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </Button>
          </Col>
        </Row>
        <Card.Subtitle className="mb-2 text-muted">
          {moment(startDate).format("MM/DD/YYYY")} -{" "}
          {moment(endDate).format("MM/DD/YYYY")}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          <b>Coordinator: </b> {coordinator ? coordinator.name : ""}
        </Card.Subtitle>
        {description && (
          <Card.Text>
            <b>Description: </b>
            {description}
          </Card.Text>
        )}
        <Card.Subtitle className="mb-2">Volunteers:</Card.Subtitle>
        <Row>
          {volunteers && volunteers.map((person, index) => (
            <Col lg={4} s={6} xs={12} key={index}>
              <Card className="volunteerCard">
                <Card.Body>
                  <h5>{person.name}</h5>
                  <i className="fas fa-phone"></i><span>{`${person.phone}`}</span>
                  <br></br>
                  <i className="fas fa-envelope-square"></i><span>{`${person.email}`}</span>
                  <br></br>
                  <Button className="btn eventBtn" size="sm" variant="dark">
                    <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
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
