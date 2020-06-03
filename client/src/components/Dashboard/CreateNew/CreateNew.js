import React from "react";
import { Link, useHistory } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"

const CreateNew = ({ obj }) => {
  const { path, name, title } = obj;

  return (
    <Jumbotron className="createNew">
      <Row>
        <Col xs={12} md={6}>
          <h1 className="m-1">{title}</h1>
        </Col>

        <Col xs={12} md={6}>
          <Link
            as="button"
            className="btn center color-white createNewBtn" variant="dark"
            to={{
              pathname: path,
            }}
          >
            Add New {name}
          </Link>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default CreateNew;
