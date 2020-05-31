import React from "react";
import "./Home.css";
import Photo from "./Cards/Photo";
import InfoCard from "./Cards/InfoCard";
import InfoBlock from "./Cards/InfoBlock/InfoBlock";
import Footer from "../../components/Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <div className="style">
    <Header />
        <div className="title">
          <h1>
            Reforestation is one of the biggest and cheapest ways to help combat
            global warming.
          </h1>
        </div>
      </div>
      <div className="middle">
        <h1>Want to Help?</h1>
        <Photo />
        <div className="volParagraph">
          <InfoBlock />
        </div>
      </div>
      <div className="bottom">
        <h1>Why We Need Help</h1>
        <InfoCard />
      </div>
      <Footer />
    </>
  );
};

export default Home;