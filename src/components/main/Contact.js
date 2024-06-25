import React from "react";

function Contact() {
  return (
    <div className="container-fluid" style={{ padding: "5%" }}>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">
                Work Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {experiences.map((experience, index) => (
            <div key={index} className="row mb-4">
              <div className="col-md-8 offset-md-2">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{experience.company}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {experience.position}
                    </h6>
                    <p className="card-text">{experience.duration}</p>
                    <p className="card-text">{experience.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
