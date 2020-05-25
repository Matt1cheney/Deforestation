import React from "react";
import "./Home.css";
import Photo from "./Cards/Photo";





const Home = () => {

    return (
      <>
       <div className="style">
         <div className="title">
           <h1>Reforestation is one of the biggest and cheapest ways to help 
             combat global warming.
           </h1>
          </div>
      </div>
      <div className="middle">
        <h1>Want to Help?</h1>
        <Photo />
      </div>
      </>
    )
  }
  
  export default Home;