import React, { useState, useEffect } from "react";
import app from "./baseauth";
import API from "../../../utils/API";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
// when a user is logged in... 
    app.auth().onAuthStateChanged((user) => {
// make an API call with their firebase UID (provided from the user obj passed in)
// and return all data that belongs to that user
      API.getPersonById(user.uid).then((dbUserres) => {
        setCurrentUser({
          currentUser: user,
          dbUser: dbUserres.data,
        });
// stops the loading page 
        setPending(false);
      }).catch((err)=> {
// stops the loading page if failure in finding user 
        setPending(false)
        alert(`${err.message} ...User not found... :(`);
      });
    });
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
