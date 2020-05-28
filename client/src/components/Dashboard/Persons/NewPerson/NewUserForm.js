import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const UserForm = ({ regions }) => {

  const [formState, setFormState] = useState({
    region: null,
    name: "",
    email: "",
    phone: "",
    role: ""
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

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formState.name === "" || formState.email === "") {
      alert("Looks like you forgot one!")
      return
    }

    API.createPerson(formState).then(res => console.log(res.data))

    setFormState({
      ...formState,
      region: null,
      name: "",
      email: "",
      phone: "",
      role: ""
    })
  }

  console.log(formState)


  return (
    <Form className="formContainer" onSubmit={handleSubmit}>
      <h1>New Person</h1>
      <Form.Row>
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="" name="name" value={formState.name} onChange={handleChange} />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="" name="phone" value={formState.phone} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="" name="email" value={formState.email} onChange={handleChange} />
        </Form.Group>
      </Form.Row>
      
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Region</Form.Label>
        <Form.Control as="select" onChange={handleChange} name="region" custom>
          <option>none</option>
          {regions.map((region, index) => (
            <option key={index} value={region._id}>{region.name}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3" value>
            <Form.Check inline label="Land Owner" type={type} id={`inline-${type}-Admin`} name="role" value="LandOwner" onChange={handleChange} />
            <Form.Check inline label="Volunteer" type={type} id={`inline-${type}-Admin`} name="role" value="Volunteer" onChange={handleChange} />
          </div>
        ))}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form >
  )
}

export default UserForm;