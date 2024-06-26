import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DIAN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item-active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="/">
                  Career
                </a>
              </li>
              <li>
                <a className="nav-link" href="/">
                  Project
                </a>
              </li>
              <li>
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button className="to-top btn-sm" onClick={() => window.scrollTo(0, 0)}>
        To Top
      </button>
    </div>
  );
}

export default Header;
