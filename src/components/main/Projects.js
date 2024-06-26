import React from "react";
import ProjectTab from "../ProjectTab";
import { iconsSet1, iconsSet2, iconsSet3, iconsSet4, iconsSet5 } from "../iconSets";
import webImg from "../../static/web-app.png";
import mobileImg from "../../static/mobile-app.png";

function Projects() {
  return (
    <div
      className="full-page-section p-4"
      style={{ height: "auto", backgroundColor: "#f7edea" }}
    >
      <div className="container">
        <div
          className="separator mb-4"
          style={{
            fontFamily: "Homemade Apple",
            fontWeight: "bold",
            fontSize: "3em",
          }}
        >
          Projects
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
        <div>
            <ProjectTab
              imgSrc={mobileImg}
              projectTitle="Language Learning App"
              projectDesc="Created a mobile application with web-based administration system for Chinese students to learn English."
              imageArray={iconsSet5}
            />
          </div>
          <div>
            <ProjectTab
              imgSrc={mobileImg}
              projectTitle="Memory Game App"
              projectDesc="Created a mobile application that allows user to fetch stock images from a URL and use them to play memory game."
              imageArray={iconsSet4}
            />
          </div>
          <div>
            <ProjectTab
              imgSrc={webImg}
              projectTitle="Image Recognition Model"
              projectDesc="Created and trained a neural network model to identify a set of pictures to improve its accuracy."
              imageArray={iconsSet3}
            />
          </div>
          <div>
            <ProjectTab
              imgSrc={webImg}
              projectTitle="Leave Application System"
              projectDesc="Created a leave application system for employees to apply and manage leave applications, as well as compensate overtime hours into leave. Utilized JPA for database mapping."
              imageArray={iconsSet2}
            />
          </div>
          <div>
            <ProjectTab
              imgSrc={webImg}
              projectTitle="Shopping Cart UI"
              projectDesc="Created a web-based shopping cart application including product listing, cart history and cart checkout service."
              imageArray={iconsSet1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
