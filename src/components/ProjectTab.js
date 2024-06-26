import React from "react";
import IconGallery from "./IconGallery";

function ProjectTab({ imgSrc, projectTitle, projectDesc, imageArray }) {
  return (
    <div class="card m-3" style={{ width: "360px", height: "540px"}}>
      <img
        src={imgSrc}
        class="card-img-top"
        alt="project"
        style={{ objectFit: "contain", maxHeight: "270px" }}
      />
      <div class="card-body">
        <h4 class="card-title" style={{ fontWeight: "bold", color: "#711A00" }}>
          {projectTitle}
        </h4>
        <div class="card-text m-3 text-start">{projectDesc}</div>
        <div class="card-text m-3">
          <div>
            <IconGallery icons={imageArray} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTab;
