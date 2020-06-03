import React, { useContext } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { AuthContext } from "../../authComponents/userAuth/Auth";
import "./style.css"


const DashboardHome = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser.dbUser)

  const { name, role, region } = currentUser.dbUser;

  return (
    <Jumbotron className="dashboardHomeView">
      <h1>Hello, {name}</h1>
      <h6>Access Level: {role}</h6>
      {role === "Coordinator" && <h6>Region: {region.name}</h6>}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
    </Jumbotron>
  )
}

export default DashboardHome;