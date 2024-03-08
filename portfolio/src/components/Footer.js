import React from "react";
import "./Font.css";
import { Link } from "react-scroll";

const Footer = ({ scrollToSection }) => {
  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
  };
  return (
    <>
      <footer
        class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top"
        style={{ width: "99vw" }}
      >
        <div className="col mb-3 d-flex justify-content-center align-items-center">
          {/* Center the Kartik name */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link p-0 text-body-secondary fs-1"
          >
            𝒦𝒶𝓇𝓉𝒾𝓀
          </Link>
        </div>

        <div class="col mb-3"></div>

        <div className="col mb-3">
          <h5>Explore</h5>
          <ul className="nav flex-column mt-4">
            <li className="nav-item mb-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-0 text-body-secondary"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mb-4">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-0 text-body-secondary"
              >
                About
              </Link>
            </li>
            <li className="nav-item mb-4">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-0 text-body-secondary"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item mb-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-0 text-body-secondary"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item mb-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-0 text-body-secondary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div class="col mb-3">
          <h5 className="mb-4 px-5 text-center">Contact</h5>
          <ul className="nav flex-column text-center">
            <li className="nav-item mb-4">
              <a
                href="mailto:kartikgoyal0852@gmail.com"
                className="nav-link p-0 text-body-secondary"
              >
                <i className="bi bi-envelope-fill me-2"></i>{" "}
                kartikgoyal0852@gmail.com
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href="tel:+919958919447"
                className="nav-link p-0 text-body-secondary"
              >
                <i className="bi bi-telephone-fill me-2"></i> +91 9958919447
              </a>
            </li>
            <li className="nav-item mb-4">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-geo-fill me-2"></i> Delhi, India
              </a>
            </li>
          </ul>
        </div>

        <div class="col col-sm-4 mb-3">
          <h5>Connect</h5>
          <ul class="nav flex-column mt-4">
            <li className="nav-item mb-2">
              <a
                href="https://github.com/kartikG-86"
                target="_blank"
                className="nav-link p-0 text-body-secondary"
                style={{
                  fontSize: "2rem",
                  color: "#24292e",
                  textDecoration: "none",
                }}
              >
                <i class="bi bi-github github"></i>
              </a>
            </li>
            <li className="nav-item  mb-2">
              <a
                href="https://www.linkedin.com/in/kartikgoyal08/"
                target="_blank"
                class="nav-link p-0 text-body-secondary "
                style={{
                  fontSize: "2rem",
                  color: "#0a66c2",
                  textDecoration: "none",
                }}
              >
                <i class="bi bi-linkedin linkedin"></i>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.instagram.com/its__k_g/"
                target="_blank"
                class="nav-link p-0 text-body-secondary"
                style={{
                  fontSize: "2rem",
                  color: "#c13584",
                  textDecoration: "none",
                }}
              >
                <i class="bi bi-instagram instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
