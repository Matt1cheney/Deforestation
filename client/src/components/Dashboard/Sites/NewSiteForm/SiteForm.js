import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import API from "../../../../utils/API";

const SiteForm = ({ regions, persons }) => {

  const owners = persons.filter((data) => { return data.role.toLowerCase() === "landowner" });

  const coordinators = persons.filter((data) => { return data.role.toLowerCase() === "coordinator" });

  const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

  const [formState, setFormState] = useState({
    name: "",
    region: null,
    owner: null,
    street: "",
    city: "",
    state: "",
    zip: "",
    status: "",
    coordinator: null
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

    if (formState.street === "" ||
      formState.city === "" ||
      formState.state === "" ||
      formState.zip === "" ||
      formState.region === null ||
      formState.coordinator === null ||
      formState.name === "") {
      alert("Looks like you forgot one!")
      return
    }

    API.createSite(formState).then(res => console.log(res.data))

    setFormState({
      ...formState,
      name: "",
      region: null,
      owner: null,
      street: "",
      city: "",
      state: "",
      zip: "",
      status: "",
      coordinator: null
    })
  }

  console.log(formState);

  return (
    <Form className="formContainer" onSubmit={handleSubmit}>
      <h1>New Site</h1>
      <Form.Row>
        <Form.Group as={Col} xs={12} md={4} controlId="formSiteName">
          <Form.Label>Site Name</Form.Label>
          <Form.Control type="text" placeholder="" name="name" onChange={handleChange} value={formState.name} />
        </Form.Group>

        <Form.Group as={Col} xs={12} md={4} controlId="formRegion">
          <Form.Label>Region</Form.Label>
          <Form.Control as="select" name="region" onChange={handleChange}>
            <option>none</option>
            {regions.map((region, index) => (
              <option key={index} value={region._id}>{region.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} xs={12} md={4} controlId="formSiteOwner">
          <Form.Label>Owner</Form.Label>
          <Form.Control as="select" name="owner" onChange={handleChange}>
            <option>none</option>
            {owners.map((owner, index) => (
              <option key={index} value={owner._id}>{owner.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="1234 Main St" name="street" onChange={handleChange} value={formState.street} />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} xs={12} md={4} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="city" onChange={handleChange} value={formState.city} />
        </Form.Group>

        <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" name="state" onChange={handleChange}>
            <option>select</option>
            {states.map((state, index) => (
              <option key={index}>{state}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} xs={12} md={4} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" name="zip" onChange={handleChange} value={formState.zip} />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} xs={12} md={6} controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" name="status" onChange={handleChange}>
            <option>none</option>
            <option>Pending</option>
            <option>Active</option>
            <option>Inactive</option>
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

      <Form.Group>
        <Form.File
          id="profileImageSiteForm"
          label="Profile Image"
          custom
          name=""
        />
      </Form.Group>
      <Form.Group>
        <Form.File
          id="contractSiteForm"
          label="Contract"
          custom
          name=""
        />
      </Form.Group>
      <Form.Group>
        <Form.File
          id="imagesSiteForm"
          label="Additional Images"
          custom
          name=""
        />
      </Form.Group>
      <Form.Group>
        <Form.File
          id="documentsSiteForm"
          label="Addition Documents"
          custom
          name=""
        />
      </Form.Group>



      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
  )
}

export default SiteForm;