import React from "react";
import oceanView from "../../static/ocean.jpg";

function Home() {
  return (
    <div className="full-page-section" style={{height: "100vh"}}>
      <div className="position-absolute">
        <img
          src={oceanView}
          alt="ocean"
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            opacity: "0.5",
            zIndex: "-1",
            height: "100vh",
            width: "100vw",
          }}
        />
      </div>

      <div className="container-fluid position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <div className="col-xl-1"></div>
          <div className="col-xl-10 text-center">
            <div style={{ fontFamily: "Homemade Apple", fontSize: "4rem" }}>
              Dian Lianto
            </div>
          </div>
          <div className="col-xl-1"></div>
        </div>
        <div className="row">
          <div className="col-xl-1"></div>
          <div
            className="col-xl-10"
            style={{
              padding: "10pt",
              fontFamily: "Lato",
              fontWeight: "Bold",
              fontSize: "1rem",
            }}
          >
            Full Stack Software Developer & Researcher
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
