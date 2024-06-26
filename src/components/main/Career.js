import React from "react";
import mediacorp from "../../static/mediacorp.png";
import kikkoman from "../../static/kikkoman.png";
import nus from "../../static/nus.png";
import iss from "../../static/iss.png";
import ga from "../../static/general-assembly.png";
import ExperienceTab from "../ExperienceTab";
import { workIconSet001 } from "../iconSets";

function Career() {
  return (
    <div
      className="full-page-section p-4"
      style={{ height: "auto", backgroundColor: "#f7edea" }}
    >
      <div className="container-fluid px-4 py-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
              <div
                className="col-4"
                style={{
                  fontWeight: "bold",
                  fontSize: "2em",
                  textAlign: "left",
                }}
              >
                Work Experience
              </div>
              <div className="col-8">
                <div>
                  <ExperienceTab
                    year="Mar 2024"
                    jobTitle="AI Solutions Intern"
                    company="Mediacorp PTE Ltds."
                    location="Singapore"
                    imgSrc={mediacorp}
                    textKey="mediacorpIntern"
                    imgArray={workIconSet001}
                  />
                </div>

                <ExperienceTab
                  year="Jul 2016 - Jul 2023"
                  jobTitle="Researcher"
                  company="Kikkoman Singapore R&D Laboratory"
                  location="Singapore"
                  imgSrc={kikkoman}
                  textKey="kikkomanResearch"
                />
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div
                className="col-4"
                style={{
                  fontWeight: "bold",
                  fontSize: "2em",
                  textAlign: "left",
                }}
              >
                Education
              </div>
              <div className="col-8">
                <ExperienceTab
                  year="Aug 2023 - Jul 2024"
                  company="National University of Singapore - Institute of Systems Science"
                  degree="Graduate Diploma in Systems Science"
                  location="Singapore"
                  imgSrc={iss}
                  textKey="educationNUSISS"
                />
                <ExperienceTab
                  year="Jul 2012 - Jul 2016"
                  company="National University of Singapore"
                  degree="Bachelor of Applied Science (Food Science & Technolgoy) with Honours (Merit)"
                  location="Singapore"
                  imgSrc={nus}
                  textKey="educationNUS"
                />
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div
                className="col-4"
                style={{
                  fontWeight: "bold",
                  fontSize: "2em",
                  textAlign: "left",
                }}
              >
                Courses & Certifications
              </div>
              <div className="col-8">
                <ExperienceTab
                  company="General Assembly"
                  imgSrc={ga}
                  textKey="courseGA001"
                />
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Career;
