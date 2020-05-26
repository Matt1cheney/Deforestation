import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const PersonForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Volunteer",
    password: ""
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

    if (formState.name === "" || formState.role === "" || formState.email === "") {
      alert("Looks like you forgot one!")
      return
    }

    API.createPerson(formState).then(res => console.log(res.data))

    setFormState({
      ...formState,
      name: "",
      email: "",
      phone: "",
      role: "",
      confirm: "",
      password: ""
    })
  }


  return (
    <Form className="formContainer" onSubmit={handleSubmit}>
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

      <Form.Row>
        <Form.Group as={Col} controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" value={formState.password} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control name="confirm" value={formState.confirm} onChange={handleChange} />
        </Form.Group>
      </Form.Row>
      <Form.Group>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3" >
            <Form.Check inline label="Coordinator" type={type} id={`inline-${type}-Coordinator`} name="role" value="Coordinator" onChange={handleChange} />
            <Form.Check inline label="Admin" type={type} id={`inline-${type}-Admin`} name="role" value="Admin" onChange={handleChange} />
            <Form.Check inline label="Volunteer" type={type} id={`inline-${type}-Volunteer`} name="role" value="Volunteer" defaultChecked onChange={handleChange} />
          </div>
        ))}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
  )
}

export default PersonForm;