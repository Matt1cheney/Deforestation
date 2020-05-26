import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../Header/Header";
import "./InformationView.css";

const Home = () => {
  return (
    <>
      <div className="info">
        <Header />
        <section className="grid1">
          <div class="img1"></div>

          <div class="img2"></div>

          <div class="img3"></div>

          <div className="strapline">
            <blockquote>
              "The quik lazy brown fox jumped over the loh"
            </blockquote>
          </div>
          <div class="cta-wrapper">
            <div class="cta">
              <h1>Gibraltar</h1>
              <p>
                Introducing 212/SE, our most powerful and agile subwoofer,
                designed exclusively for larger systems and rooms to allow
                superior state of the art speakers to spring to full voice.
              </p>
              <a class="button" href="/">
                View Product Details →
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
