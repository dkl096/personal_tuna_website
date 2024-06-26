import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div
      className="full-page-section py-3"
      style={{ height: "auto", backgroundColor: "#ac9593" }}
    >
      <div className="container">
        <div className="text-center mb-2">
          <div
            className="mb-2"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Contact Me
          </div>
          <div className="mb-2">
            <a
              href="https://github.com/dkl096"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px 0 10px" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
            </a>
            <a
              href="https://www.linkedin.com/in/dianklianto/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px 0 10px" }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="black" />
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} size="m" color="black" />
            <span style={{ marginLeft: '10px' }}>dianklianto@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
