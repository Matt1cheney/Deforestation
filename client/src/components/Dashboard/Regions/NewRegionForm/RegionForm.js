import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import API from "../../../../utils/API";



const RegionForm = ({ persons }) => {

  const coordinators = persons.filter((data) => {
    return data.role.toLowerCase() === "coordinator"
  })

  const [formState, setFormState] = useState({
    name: "",
    coordinator: null,
    descriptor: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    if( value === "none") {
      setFormState({
        ...formState,
        [name]: null
      })
      return
    }

    setFormState({
      ...formState,
      [name]: value
    })
  }

  console.log(formState)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formState.name === "" || formState.descriptor === "") {
      alert("Looks like you forgot one!")
      return
    }

    API.createRegion(formState).then(res => console.log(res.data)).catch(err => console.log(err))

    setFormState({
      ...formState,
      name: "",
      coordinator: null,
      descriptor: ""
    })
  }

  console.log(formState)
  return (
    <Container className="formContainer">
      <Form onSubmit={handleSubmit}>
        <h1>New Region</h1>
        <Form.Group controlId="formRegion">
          <Form.Label>Region Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter region name"
            name="name"
            value={formState.name}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Coordinator</Form.Label>
          <Form.Control as="select" name="coordinator" onChange={handleChange}>
            <option>none</option>
            {coordinators.map((person, index) => (
              <option key={index} value={person._id}>{person.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter brief description"
            name="descriptor"
            value={formState.descriptor}
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