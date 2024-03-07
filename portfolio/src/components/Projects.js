import React from "react";

const data = [
  {
    text: "Stay Near U",
    img: "staynearu.png",
    demo: "https://staynearu-30f69.web.app/",
    code: "https://github.com/kartikG-86/Stay-Near-U",
  },
  {
    text: "Tweeverse",
    img: "tweeverse.png",
    demo: "https://tweeverse-11432.web.app/",
    code: "https://github.com/kartikG-86/TweeVerse",
  },
  {
    text: "Chat Application",
    img: "chat.png",
    demo: "https://chat-app-kartikg.onrender.com/",
    code: "https://github.com/kartikG-86/Chat-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-5 mb-5">
      <div className="container">
        <div className="row text-start ps-5 fs-1">Projects</div>
        <hr
          className="pb-1 ms-3"
          style={{ width: "14rem", borderTop: "0.2rem solid #D2042D" }}
        />
        <div className="row text-start ps-5 pb-5 fs-6">
          Check out some of my projects right here
        </div>
        <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-sm-2 g-4 pb-5">
          {data.map((item) => (
            <div className="col-lg-4" key={item.text}>
              <div className="card">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt="Project image"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{item.text}</h5>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <a
                    href={item.demo}
                    style={{ width: "10rem" }}
                    className="btn "
                  >
                    Demo
                  </a>
                  <a
                    href={item.code}
                    style={{ width: "10rem" }}
                    className="btn"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
