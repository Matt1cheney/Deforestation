import React, { useState, useEffect } from 'react';
import Admin from "./baseAdmin"

//create context and export 
export const AdminContext = React.createContext();
// create our provider and export
export const AdminProvider = ({ children }) => {
  // create our states
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  // during creation of user grab currentuser. if pending show loading screen
  useEffect(() => {
    Admin.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    })
  },[]);
  if(pending) {
    return <>Loading...</>
  };

  return (
    <AdminContext.Provider value={{ currentUser }}>
      {{ children }}
    </AdminContext.Provider>
  )

}