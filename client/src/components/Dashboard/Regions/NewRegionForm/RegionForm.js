import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";



const RegionForm = () => {
  const [formState, setFormState] = useState({
    region: "",
    coordinator: "",
    description: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(formState.region === "" || formState.coordinator === "" || formState.description === "") {
      alert("Looks like you forgot one!")
      return
    }

    console.log(formState) 

    setFormState({
      ...formState,
      region: "",
      coordinator: "",
      description: ""
    })
  }


  return (
    <Container className="formContainer">
      <Form onSubmit={handleSubmit}>
        <h1>New Region</h1>
        <Form.Group controlId="formRegion">
          <Form.Label>Region Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter region name"
            name="region"
            value={formState.region}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formCoordinator">
          <Form.Label>Coordinator</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter coordinator name"
            name="coordinator"
            value={formState.coordinator}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter brief description"
            name="description"
            value={formState.description}
            onChange={handleChange} />
        </Form.Group>
        <Button variant="dark" className="btn" type="submit">
          Submit
      </Button>
      </Form>
    </Container>
  )
}

export default RegionForm