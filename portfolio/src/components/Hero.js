import React, { useEffect, useRef } from "react";
import "./Font.css";
import { Link } from "react-scroll";
import resumePdf from "../Kartik_Goyal_2024.pdf";
import Typed from "typed.js";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = resumePdf;
    anchor.download = "Kartik_Goyal_2024.pdf";
    anchor.click();
  };

  const TypingAnimation = () => {
    const typedRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: [
          " Full Stack Developer",
          "Front-end Developer",
          "Backend Developer",
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }, []);

    return <span ref={typedRef}></span>;
  };

  return (
    <>
      <section id="home">
        <div className="container pt-5 px-3 pb-5">
          <div className="row pt-5 ps-2">
            <div
              className="col-lg-12 pt-5  text-start"
              style={{ color: "#D2042D" }}
            >
              Hi my name is
            </div>
            <div
              className="col-lg-12 responsive-text text-start"
              // style={{ fontSize: "4rem", padding: "0 10rem" }}
            >
              Kartik Goyal
            </div>
            <div
              className="col-lg-12 responsive-text text-start"
              // style={{ padding: "0 10rem", fontSize: "4rem", color: "grey" }}
            >
              I'm a <TypingAnimation />.
            </div>
            <div
              className="col-lg-12 pt-5 text-start"
              // style={{ padding: "0 10rem" }}
            >
              <button
                type="button"
                class="btn btn-outline-light me-4 mb-5"
                onClick={handleDownloadResume}
              >
                Download My CV <i class="bi bi-download ms-2"></i>
              </button>
              <Link
                to="contact"
                type="button"
                class="btn btn-outline-danger mb-5"
              >
                Hire Me <i class="bi bi-arrow-down ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
