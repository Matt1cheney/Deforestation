import React from "react";
import Card from "react-bootstrap/Card";


const RegionCard = ( {region} ) => {
  

  const {name, coordinator, description} = region;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Coordinator: {coordinator}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default RegionCard;