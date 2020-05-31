import React, { useState, useCallback, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import app from "../../../authComponents/userAuth/baseAuth";

const PersonForm = ({ regions, history }) => {
  // const availableRegions = regions.filter((data) => {
  //   return data.coordinator === null;
  // })
const [user, setUser] = useState(null);
  const [formState, setFormState] = useState({
    region: null,
    name: "",
    email: "",
    fireBaseUid: "",
    phone: "",
    role: "",
    password: "",
  });

  useEffect(() => {
    async function fetchData(event) {
      // event.preventDefault();
      
      // const { email, password } = event.target.elements;
      
      const firebase = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      
      const response = await firebase.json();

      console.log("useEffect response ",response)

      // setFormState({
      //   ...formState,
      //   region: null,
      //   name: "",
      //   email: "",
      //   fireBaseUid: fireBaseUid(),
      //   phone: "",
      //   role: "",
      //   password: "",
      // });
    }

    fetchData();

  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "none") {
      setFormState({
        ...formState,
        [name]: null,
      });
      return;
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //    console.log("formstate ", formState);
  // const handleSignUp = useCallback(
  //   async (event) => {
  //     event.preventDefault();
  //     const { email, password} = event.target.elements;
  //     try {
  //        app
  //         .auth()
  //         .createUserWithEmailAndPassword(email.value, password.value);
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },
  //   [history]
  // );

  const addUser = (e) => {
    e.preventDefault();

    if (formState.name === "" || formState.email === "") {
      alert("Looks like you forgot one!");
      return;
    }
    setUser(true);
    // setFormState({
    //   ...formState,
    //   region: null,
    //   name: "",
    //   email: "",
    //   fireBaseUid: "",
    //   phone: "",
    //   role: "",
    //   password: "",
    // });
  };
  return (
    <>
      <Form className="formContainer" onSubmit={addUser}>
        <h1>New Admin or Coordinator</h1>
        <Form.Row>
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirm"
              value={formState.confirm}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Region</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            name="region"
            custom
          >
            <option>none</option>
            {regions.map((region, index) => (
              <option key={index} value={region._id}>
                {region.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3" value>
              <Form.Check
                inline
                label="Coordinator"
                type={type}
                id={`inline-${type}-Coordinator`}
                name="role"
                value="Coordinator"
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Admin"
                type={type}
                id={`inline-${type}-Admin`}
                name="role"
                value="Admin"
                onChange={handleChange}
              />
            </div>
          ))}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default withRouter(PersonForm);

// const handleSubmit = (e) => {
//   e.preventDefault()

//   if (formState.name === "" || formState.email === "") {
//     alert("Looks like you forgot one!")
//     return
//   }

//   API.createPerson(formState).then(res => console.log("api data ", res.data))

//   setFormState({
//     ...formState,
//     region: null,
//     name: "",
//     email: "",
//     fireBaseUid: app.auth().currentUser.uid,
//     phone: "",
//     role: "",
//     password: ""
//   })
// }
