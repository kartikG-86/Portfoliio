import React from "react";
import "./Font.css";

const data = [
  {
    color: "#e34c26",
    text: "HTML",
    img: "html5.png",
  },
  {
    color: "#264de4",
    text: "CSS",
    img: "css.png",
  },
  {
    color: "#F0DB4F",
    text: "Javascript",
    img: "javascript.png",
  },
  {
    color: "#61DBFB",
    text: "React JS",
    img: "logo192.png",
  },
  {
    color: "#002984",
    text: "Material Ui",
    img: "material.png",
  },
  {
    color: "#3c873a",
    text: "Node JS",
    img: "nodejs.png",
  },
  {
    color: "#FFE873",
    text: "Python",
    img: "python.png",
  },
  {
    color: "#00758F",
    text: "MySQL",
    img: "mysql.png",
  },
  {
    color: "#659ad2",
    text: "C++",
    img: "c++.png",
  },
  {
    color: "#4DB33D",
    text: "Mongo DB",
    img: "mongo.png",
  },
  {
    color: "#FFA611",
    text: "Firebase",
    img: "firebase.png",
  },
  {
    color: "#563d7c",
    text: "Bootstrap",
    img: "bootstrap.png",
  },
];

const Experience = () => {
  return (
    <>
      <section id="experience">
        <div className="container">
          <div
            className="row text-start ps-5 fs-1"
            // style={{ textDecoration: "underline #D2042D" }}
          >
            Experience
          </div>
          <hr
            className="pb-1 ms-3"
            style={{ width: "14rem", borderTop: " 0.2rem solid #D2042D" }}
          />
          <div
            className="row text-start ps-5 pb-5  fs-6"
            // style={{ textDecoration: "underline #D2042D" }}
          >
            These are the technologies I've worked with
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 g-4 pb-5 mx-3">
            {data.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <div
                  className="card"
                  style={{
                    width: "100%", // Set width to 100% initially
                    borderBottom: `0.2rem solid ${item.color}`,
                    borderLeft: `0.1rem solid ${item.color}`,
                    borderRight: `0.1rem solid ${item.color}`,
                    borderTop: "1px solid rgba(0, 0, 0, 0.2)",
                    // Apply margin based on screen size
                    marginBottom:
                      index % 2 === 0 ? "mb-md-4 mb-sm-3" : "mb-md-0 mb-sm-0", // For even index
                    marginTop:
                      index % 2 === 0 ? "mt-md-0 mt-sm-0" : "mt-md-4 mt-sm-3", // For odd index
                    marginLeft:
                      index % 2 === 0 ? "ml-md-0 ml-sm-0" : "ml-md-5 ml-sm-4", // For even index
                    marginRight:
                      index % 2 === 0 ? "mr-md-5 mr-sm-4" : "mr-md-0 mr-sm-0", // For odd index
                  }}
                >
                  <div className="card-body">
                    <img
                      src={item.img}
                      style={{ height: "6rem", backgroundColor: "transparent" }}
                      alt=""
                    />
                    <h6 className="pt-4">{item.text}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
