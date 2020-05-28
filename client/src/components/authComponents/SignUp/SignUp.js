import React, { useCallback } from "react";
import { withRouter } from "react-router";
import App from "../userAuth/baseAuth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NewPersonForm from "../../Dashboard/Persons/NewPerson/NewPersonForm"

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await App
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/")
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <NewPersonForm onSubmit={handleSignUp} />
  );

  // return (
  //   <div>
  //     <h1>Sign Up</h1>
  //     <form onSubmit={handleSignUp}>
  //       <label>
  //         Email
  //         <input name="email" type="email" placeholder="Email" />
  //       </label>
  //       <label>
  //         Password
  //         <input name="password" type="password" placeholder="Password" />
  //       </label>
  //       <button type="submit">Sign Up</button>
  //     </form>
  //   </div>
  // );
};

export default withRouter(SignUp);
