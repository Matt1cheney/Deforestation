import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";



const CreateNew = ({ obj }) => {
 
  const {path, name, title} = obj;

  return (
    <Jumbotron className="createNew">
      <h1>{title}</h1>
      <p>
        <Button href={path} className="btn center" variant="dark">Add New {name}</Button>
      </p>
    </Jumbotron>
  )
}

export default CreateNew; 