import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../Header/Header";
import "./InformationView.css";
import ReforestationMap from "../Reforestation/ReforestationMap";

const Home = () => {
  return (
    <>
      <div className="info">
        <div className="headerDiv">
          <Header />
        </div>
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
              "hello lorem ipsumn lesdnc the qwuiacj fr[blorem iosum the suick
              brown foix jumoed over the lig the awuicj broe nfos uuorem ipsumn
              lesdnc the qwuiacj fr[blorem iosum the suick brown foix jumoed
              over the lig the awuicj broe nfos uuorem ipsumn lesdnc the qwuiacj
              fr[blorem iosum the suick brown foix jumoed over the lig the
              awuicj broe nfos uupmed over the log"{" "}
            </p>
          </div>
        </section>
        <section className="grid2">
          <div className="div1"></div>
          <div className="div2">
            <h1>Reforestation</h1>
          </div>
          <div className="div3"></div>
          <div className="div4">
            <p>
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no
              es simplemente texto aleatorio. Tiene sus raices en una pieza
              cl´sica de la literatura del Latin, que data del año 45 antes de
              Cristo, haciendo que este adquiera mas de 2000 años de antiguedad.
              Richard McClintock, un profesor de Latin de la Universidad de
              Hampden-Sydney en Virginia, encontró una de las palabras más
              oscuras de la lengua del latín, "consecteur", en un pasaje de
              Lorem Ipsum, y al seguir leyendo distintos textos del latín,
              descubrió la fuente indudable. Lorem Ipsum viene de las secciones
              1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum"{" "}
            </p>
          </div>
        </section>
        <ReforestationMap />
        <Footer />
      </div>
    </>
  );
};

export default Home;
