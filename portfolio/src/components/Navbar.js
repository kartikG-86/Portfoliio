import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="d-flex justify-content-between w-100">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link p-0 text-body-secondary fs-2 ms-3"
          >
            𝒦𝒶𝓇𝓉𝒾𝓀
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={!collapsed ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link
                className="nav-link"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavbar}
              >
                About
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className="nav-link"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavbar}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className="nav-link"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavbar}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavbar}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
