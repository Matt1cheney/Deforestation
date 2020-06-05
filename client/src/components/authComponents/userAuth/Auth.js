import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import app from "./baseAuth.js";
import API from "../../../utils/API";

export const AuthContext = React.createContext();

const userObj = {
  currentUser: null,
  dbUser: {
    name: null,
    role: null,
    region: null,
    email: null,
    phone: null,
    firebaseUid: null
  }
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(userObj);
  const [pending, setPending] = useState(true);

  const history = useHistory();

  useEffect(() => {
    // when a user is logged in...
   app.auth().onAuthStateChanged((user) => {
      // make an API call with their firebase UID (provided from the user obj passed in)
      // and return all data that belongs to that user

      if (user === null) { 
        setPending(false);
        return
      }
        
        API.getPersonByUid(user.uid)
        .then((dbUserres) => {
          setCurrentUser({
            currentUser: user,
            dbUser: dbUserres.data,
          });
          // stops the loading page
          setPending(false);
        })
        .catch((err) => {
          // stops the loading page if failure in finding user
          setPending(false);
          console.log(`${err.message} ...User not found... :(`)
        });
    }, (err) => console.log(err));
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    // provides all children wrapped inside this provider tag the user info.
    <AuthContext.Provider value={currentUser}>
      {children} {console.log(currentUser)}
    </AuthContext.Provider>
  );
};
