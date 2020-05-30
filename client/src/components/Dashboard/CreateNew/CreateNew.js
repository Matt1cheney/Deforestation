import React from "react";
import { Link, useHistory } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const CreateNew = ({ obj }) => {
  const { path, name, title } = obj;

  return (
    <Jumbotron className="createNew">
      <h1 className="m-1">
        {title}

        <Link
          as="button"
          className="btn center float-right color-white" variant="dark"
          to={{
            pathname: path,
          }}
        >
          Add New {name}
        </Link>
      </h1>
    </Jumbotron>
  );
};

export default CreateNew;
