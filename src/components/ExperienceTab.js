import React from "react";
import textContent from "../data/jobDesc.json";
import IconGallery from "./IconGallery";

function ExperienceTab({ year, jobTitle, company, degree, location, imgSrc, textKey, imgArray }) {
  const lines = textContent[textKey];

  return (
    <div
      className="d-flex justify-content-center text-start px-5 py-4 rounded shadow-sm mb-4"
      style={{ backgroundColor: "white", flexDirection: "column" }}
    >
      <div className="d-flex flex-column">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            <div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#711A00",
                }}
              >
                {year}
              </h2>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
        <div className="row">
        <div className="col-1"></div>

          <div className="col-5 border-end border-dark">
            <div
              className="mb-2"
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              {jobTitle}
            </div>
            <div className="mb-2">
              <img
                src={imgSrc}
                alt="company_logo"
                style={{ maxWidth: "170px" }}
              />
            </div>
            <div className="mb-2" style={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}>{company}</div>
            <div className="mb-2">{degree}</div>
            <div className="mb-2">{location}</div>
            {imgArray && 
              <div><IconGallery icons={imgArray}/></div>
            }
          </div>
          <div className="col-6">
            {lines.map((line, index) => (
              <div key={index} className="mb-2 text-start">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTab;
