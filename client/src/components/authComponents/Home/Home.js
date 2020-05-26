import React from "react";
import app from "../auth/baseauth";


const Home = () => {
  const user = app.auth().currentUser;
  return (
    <>
      <h1>Home</h1>
  <h1>welcome {user.displayName}!</h1>
      <button onClick={() => app.auth().signOut()}>
        Sign Out
      </button>
    </>
  );
};

export default Home;