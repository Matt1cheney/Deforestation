import React from "react";
import "./Home.css";
import LinkCard from "./Cards/LinkCards";




const Home = () => {

    return (
      <>
       <div className="style">
         <div className="title">
           <h1>#ReforestNation</h1>
          </div>
      </div>
      <div className="middle">
        <h1>Want to Help?</h1>
        <LinkCard />
      </div>
      </>
    )
  }
  
  export default Home;