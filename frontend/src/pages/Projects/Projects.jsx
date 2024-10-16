import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-span-12 mt-3 mb-1 text-center">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, et.
          Rerum similique soluta autem enim debitis, sequi odit? Sed nulla nam
          qui aliquam nesciunt laborum dolorum natus repudiandae in optio?
        </p>
        <div className="row" id="ads">
          <Fade top>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FullStack</span>
                  <img
                    src="https://img.freepik.com/free-vector/set-strength-training-men-women-lifting-weights_1262-19930.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">JWT</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body ">
                  <div className="ad-title text-center">
                    <h5 className="text-uppercase">Workout App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/youssef-m-roushdy/Workout-Body"
                    target="_blank" rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FullStack</span>
                  <img
                    src="https://media.licdn.com/dms/image/D4E12AQHigcsaZVheug/article-cover_image-shrink_720_1280/0/1697208830349?e=2147483647&v=beta&t=mW0Qeq7cNs65qB1tGgNSPVV0eOclugscgmrHk7hsz6c"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Asp .Net v8</span>
                  <span className="card-detail-badge">NuGet Packages</span>
                  <span className="card-detail-badge">LINQ</span>
                  <span className="card-detail-badge">JWT</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MySQL</span>
                </div>
                <div className="card-body ">
                  <div className="ad-title text-center">
                    <h5 className="text-uppercase">Finacial model app</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/youssef-m-roushdy/Financial-Model-App"
                    target="_blank" rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">BackEnd</span>
                  <img
                    src="https://www.addevice.io/storage/ckeditor/uploads/images/637f69697a17e_restaurant.app.features.cost.tech.details.1.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Asp .Net v8</span>
                  <span className="card-detail-badge">NuGet Packages</span>
                  <span className="card-detail-badge">JWT</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body ">
                  <div className="ad-title text-center">
                    <h5 className="text-uppercase">Restaurant API</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/youssef-m-roushdy/Financial-Model-App"
                    target="_blank" rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;
