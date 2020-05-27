import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../Header/Header";
import "./InformationView.css";
import ReforestationMap from "../Reforestation/ReforestationMap";

const Home = () => {
  return (
    <>
      <div className="info">
        <Header />
        <section className="main">
        <div className="backgroundImage"></div>
        div
        </section>
        <section className="grid2">
          <div className="parent">
            <div className="div1">
              <h2>About Us</h2>
            </div>
            <div className="div2">
              <h2>About Us</h2>
            </div>
            <div className="div3"></div>
            <div className="div4">
              <p>
                hello lorem ipsumn lesdnc the qwuiacj fr[brin foix jumoed ovet={" "}
              </p>
            </div>
          </div>
        </section>
        <ReforestationMap />
        <Footer />
      </div>
    </>
  );
};

export default Home;
