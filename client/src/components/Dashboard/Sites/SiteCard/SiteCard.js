import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../style.css";


const SiteCard = ( {site} ) => {
  

  const {} = site;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Coordinator: {coordinator}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Button className="eventBtn">Events</Button>{" "}
        <Button className="eventBtn">Sites</Button>{" "}
        <Button className="eventBtn">Seedlings</Button>{" "}
        <Button className="eventBtn">Edit Region</Button>
      </Card.Body>
    </Card>
  )
}

export default SiteCard;