import React from "react";
import ProfilePicture from "../ProfilePicture.js";
import profilePic from "../../static/eagle_ray.jpg";

function About() {
  return (
    <div
      className="full-page-section"
      style={{ height: "auto", backgroundColor: "#f7edea" }}
    >
      <div className="container-fluid">
        <div className="row" style={{ padding: "5%" }}>
          <div className="col-2"></div>
          <div className="col-5">
            <div
              style={{
                fontFamily: "Homemade Apple",
                fontWeight: "bold",
                fontSize: "3em",
                textAlign: "left",
              }}
            >
              Hello!
            </div>
            <div style={{ fontSize: "1rem", textAlign: "left" }}>
                My name is Dian Lianto. I am an aspiring{" "}
                <b>Full Stack Software Developer</b> with background in AI. I
                used to be a researcher with 7 years experience in biotechnology
                R&D. I am open to a full-time job opportunity in software
                development, AI or data analytics, and I am looking forward to
                make meaningful contributions to the society through technology.
              </div>
          </div>
          <div className="col-3">
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
              <ProfilePicture src={profilePic} alt="Profile" />
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
