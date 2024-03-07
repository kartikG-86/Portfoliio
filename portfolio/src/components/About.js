import React from "react";
import "./Font.css";
const About = () => {
  return (
    <>
      <section className="pb-5" id="about">
        <div className="container ">
          <div className="row">
            <div
              className="col-lg-12 mt-5 fs-1 text-center"
              //   style={{
              //     textDecoration: "underline #D2042D",
              //   }}
            >
              About
            </div>
            <hr
              className="m-auto pb-4"
              style={{ width: "8rem", borderTop: " 0.2rem solid #D2042D" }}
            />
          </div>
          <div className="row pb-5">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 fs-2 text-end">
              Hi. I'm Kartik Goyal, <br /> nice to meet you. Please <br />
              take a look around!
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 p-3 text-start">
              Hello! I'm Kartik Goyal, a passionate software developer. <br /> I
              specialize in web development, with expertise in both front-end{" "}
              <br />
              and back-end technologies. I thrive on creating innovative
              solutions <br /> and enhancing user experiences through code.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
