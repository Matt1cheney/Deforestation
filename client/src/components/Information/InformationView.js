import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../Header/Header";
import "./InformationView.css";
import ReforestationMap from "../Reforestation/ReforestationMap";

const Home = () => {
  return (
    <>
      <div className="headerDiv">
        <Header />
      </div>
      <div className="info">
        <section className="mainGrid">
          <div className="backgroundImage">
            <div className="blur"></div>
          </div>
          <div className="secondaryImage">
            <div className="about">
              <h1>About Us</h1>
            </div>
          </div>

          <div className="textBlock">
            {" "}
            <p>
              "In collaboration with the Appleseed Initiative, ReforestNation is a non-rofit
              organization dedicated to pairing landowners, seedling providers, and volunteers 
              together to plant trees and help restore the health of the climate. Here volunteers 
              can find when local events are happening and become a part of something we are all 
              pasionate about. Resource providers can get in touch with event coordinators in their area to 
              and discuss how they can be an integral part in reforesting where we can."{" "}
            </p>
          </div>
        </section>
        <section className="bar">
          <div className="line"></div>
        </section>
        <section className="grid2">
          <div className="div1"></div>
          <div className="div2">
            <h1>Reforestation</h1>
          </div>
          <div className="div3"></div>
          <div className="div4">
            <p>
              When plants grow they sequester atmospheric carbon in their
              tissues via the process of photosynthesis. Because forests are
              full of large trees and other plants, they store massive amounts
              of carbon. But when they are burned or chopped down, much of that
              carbon is released into the atmosphere as carbon dioxide and other
              greenhouse gases (nitrous oxide, methane, and other nitrogen
              oxides). The clearing and burning of tropical forests and
              peatlands accounts for about ten percent of greenhouse gases from
              human activities. Therefore forest protection and restoration are
              critical to slowing climate change. By one estimate, published in
              2015 in the scientific journal Nature, tropical forests alone
              could meet half the 2050 target for reducing carbon emissions.
            </p>
          </div>
        </section>
        <section className="bar">
          <div className="line"></div>
        </section>
        <ReforestationMap />
        <Footer />
      </div>
    </>
  );
};

export default Home;
