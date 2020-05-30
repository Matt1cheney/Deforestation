import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EventForm = ({ sites, persons }) => {

  const coordinators = persons.filter((data) => { return data.role.toLowerCase() === "coordinator" });

  const [formState, setFormState] = useState({
    site: null,
    coordinator: null,
    description: "",
    date: "",
    startTime: "",
    endTime: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    if (value === "none") {
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

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formState.site === null || formState.coordinator === null) {
      alert("Looks like you forgot one!")
      return
    }

    API.createEvent(formState).then(res => console.log(res.data))

    setFormState({
      ...formState,
      site: null,
      coordinator: null,
      description: "",
      date: "",
      startTime: "",
      endTime: ""
    })
  }

  console.log(formState)

  return (
    <Form className="formContainer" onSubmit={handleSubmit}>
      <h1>New Event</h1>
      <Form.Row>
        <Form.Group as={Col} xs={12} md={6} controlId="formSite">
          <Form.Label>Site</Form.Label>
          <Form.Control as="select" name="site" onChange={handleChange}>
            <option>none</option>
            {sites.map((site, index) => (
              <option key={index} value={site._id}>{site.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} xs={12} md={6} controlId="formCoordinator">
          <Form.Label>Coordinator</Form.Label>
          <Form.Control as="select" name="coordinator" onChange={handleChange}>
            <option>none</option>
            {coordinators.map((person, index) => (
              <option key={index} value={person._id}>{person.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control placeholder="MM/DD/YYYY" name="date" onChange={handleChange} value={formState.date}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formStartTime">
          <Form.Label>Start Time</Form.Label>
          <Form.Control placeholder="11:00am" name="startTime" onChange={handleChange} value={formState.startTime}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formEndTime">
          <Form.Label>End Time</Form.Label>
          <Form.Control placeholder="2:00pm" name="endTime" onChange={handleChange} value={formState.endTime}/>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3" name="description" onChange={handleChange} value={formState.description}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
  )
}

export default EventForm;