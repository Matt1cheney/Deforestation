import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";
import Card from "react-bootstrap/Card";



const SourceForm = ({ sites, persons, regions }) => {

  const owners = persons.filter((data) => { return data.role.toLowerCase() === "landowner" });

  const coordinators = persons.filter((data) => { return data.role.toLowerCase() === "coordinator" });

  const [formState, setFormState] = useState({
    region: null,
    name: "",
    owner: null,
    coordinator: null,
    address: "",
    seedlings: []
  })

  const [seedState, setSeedState] = useState({
    count: "",
    type: "",
    age: "",
    date: "",
    site: "",
  })

  const handleSeedState = (event) => {
    const { name, value } = event.target

    setSeedState({
      ...seedState,
      [name]: value
    })
  }

  const handleSeedAdd = (event) => {
    event.preventDefault()

    const newObj = {
      count: seedState.count,
      type: seedState.type,
      age: seedState.age,
      date: seedState.date,
      site: seedState.site
    }

    formState.seedlings.push(newObj)

    setSeedState({
      ...seedState,
      count: "",
      type: "",
      age: "",
      date: "",
      site: "",
    })
  }

  const deleteSeed = (event) => {
    const { value } = event.target
    console.log(value)
  }

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

    if (formState.name === "" || formState.email === "") {
      alert("Looks like you forgot one!")
      return
    }

    API.createSource(formState).then(res => console.log(res.data))

    setFormState({
      ...formState,
      region: null,
      name: "",
      owner: null,
      coordinator: null,
      address: "",
      seedlings: []
    })
  }


  return (
    <Form className="formContainer" onSubmit={handleSubmit}>
      <h1>New Source</h1>
      <Form.Row>
        <Form.Group as={Col} xs={12} md={4} controlId="formDate">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="" name="name" onChange={handleChange} value={formState.date} />
        </Form.Group>

        <Form.Group as={Col} xs={12} md={4} controlId="formSite">
          <Form.Label>Region</Form.Label>
          <Form.Control as="select" name="region" onChange={handleChange}>
            <option>none</option>
            {regions.map((region, index) => (
              <option key={index} value={region._id}>{region.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} xs={12} md={4} controlId="formCoordinator">
          <Form.Label>Owner</Form.Label>
          <Form.Control as="select" name="owner" onChange={handleChange}>
            <option>none</option>
            {owners.map((person, index) => (
              <option key={index} value={person._id}>{person.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} xs={12} md={8} controlId="formStartTime">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="" name="address" onChange={handleChange} value={formState.startTime} />
        </Form.Group>
        <Form.Group as={Col} xs={12} md={4} controlId="formCoordinator">
          <Form.Label>Coordinator</Form.Label>
          <Form.Control as="select" name="coordinator" onChange={handleChange}>
            <option>none</option>
            {coordinators.map((person, index) => (
              <option key={index} value={person._id}>{person.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

      </Form.Row>


      <h3>Available Seedlings</h3>
      <Row>
        {formState.seedlings !== [] && formState.seedlings.map((item, index) => (
          <Col xs={12} md={4} key={index}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title><h3>{item.type}</h3></Card.Title>
                  </Col>
                  <Col>
                    <Button className="btn align-right" variant="dark" value={index} onClick={deleteSeed}><i className="far fa-trash-alt"></i></Button>
                  </Col>
                </Row>
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
      <Form.Row>
        <Form.Group as={Col} xs={12} md={4} controlId="formType">
          <Form.Label>Tree Type</Form.Label>
          <Form.Control type="text" value={seedState.type} placeholder="" name="type" onChange={handleSeedState} />
        </Form.Group>
        <Form.Group as={Col} xs={12} md={4} controlId="formCount">
          <Form.Label>Count</Form.Label>
          <Form.Control type="text" value={seedState.count} placeholder="" name="count" onChange={handleSeedState} />
        </Form.Group>
        <Form.Group as={Col} xs={12} md={4} controlId="formAge">
          <Form.Label>Target Age</Form.Label>
          <Form.Control type="text" value={seedState.age} placeholder="" name="age" onChange={handleSeedState} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} xs={12} md={4} controlId="formDate">
          <Form.Label>Availibilty Date</Form.Label>
          <Form.Control type="text" value={seedState.date} placeholder="" name="date" onChange={handleSeedState} />
        </Form.Group>
        <Form.Group as={Col} xs={12} md={4} controlId="formSite">
          <Form.Label>Intended Site</Form.Label>
          <Form.Control as="select" value={seedState.site} name="site" onChange={handleSeedState}>
            <option>none</option>
            {sites.map((site, index) => (
              <option key={index} >{site.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Button variant="dark" type="click" onClick={handleSeedAdd}>
        Add Seedling Type
</Button>

      <br></br>
      <br></br>

      <Button variant="dark" type="submit">
        Submit
</Button>
    </Form>
  )
}


export default SourceForm;