import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import "../style.css";


const SourceCard = ({ source, onDelete, this3 }) => {

  const { _id, name, owner, address, seedlings, region, coordinator } = source;

  return (
    <Card className="dashboardCard">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title><h3>{name}</h3></Card.Title>
          </Col>
          <Col>
            <Link
              as="button"
              className="btn align-right color-white"
              to={{
                pathname: `/dashboard/updateSource`,
                source: source
              }}
            >
              <svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </Link>
            <Button
              className="btn align-right"
              variant="dark"
              onClick={() => onDelete(_id, this3)}
            >
              <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col as={Col} xs={12} md={4}>
            <Card.Subtitle><b>Owner: </b> {owner && owner.name && owner.name}</Card.Subtitle>
            <Card.Subtitle><b>Region: </b> {region && region.name && region.name}</Card.Subtitle>
            <Card.Subtitle><b>Coordinator: </b> {coordinator && coordinator.name && coordinator.name}</Card.Subtitle>
            <br></br>
            <Card.Subtitle><b>Address:</b> <br></br> {address.street} <br></br> {address.city}, {address.state} <br></br> {address.zip}</Card.Subtitle>
          </Col>
          <Col as={Col} xs={12} md={8}>
            <Form.Label style={{textDecoration: "underline"}}>Seedlings Details:</Form.Label>
            <Card.Subtitle><b>Tree Types: </b> {seedlings.tree_type}</Card.Subtitle>
            <Card.Subtitle><b>Count: </b> {seedlings.count}</Card.Subtitle>
            <Card.Subtitle><b>Target Age: </b> {seedlings.target_age} Year</Card.Subtitle>
            <Card.Subtitle><b>Available Date: </b> {moment(seedlings.available).format("MM/DD/YYYY")}</Card.Subtitle>
            <Card.Subtitle><b>Intended Site: </b> {seedlings.intendSite && seedlings.intendSite.name && seedlings.intendSite.name}</Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default SourceCard;