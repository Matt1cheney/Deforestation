import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../../../utils/API";
import "../style.css";


const SourceCard = ({ source }) => {

  const { name, owner, address, seedlings, region } = source;

  const onDelete = async (event) => {
    try {
      const response = await API.deleteSource(name)
      alert(response.data.message);
      window.location.reload(true);
    }
    catch(err) { alert(err.message) } 
  }

  return (
    <Card className="dashboardCard">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title><h3>{name}</h3></Card.Title>
          </Col>
          <Col>
            <Button className="btn align-right" variant="dark" onClick={onDelete}>Delete Source</Button>
          </Col>
        </Row>
        <Card.Subtitle className="mb-2 text-muted">Owner: {owner}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Region: {region ? region.name : ''}</Card.Subtitle>
        <br></br>
        <Card.Subtitle className="mb-2"><b>Address:</b> {address} </Card.Subtitle>
        <h4>Available Seedlings</h4>
        <Row>
          {seedlings && seedlings.map((item, index) => (
            <Col xs={12} md={4} key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.type}</Card.Title>
                  <ul>
                    <li>Count: {item.count}</li>
                    <li>Age: {item.age}</li>
                    <li>Available: {item.date}</li>
                    <li>Site: {item.site}</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  )
}

export default SourceCard;