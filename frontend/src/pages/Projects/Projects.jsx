import React, { useEffect, useState } from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/projects`);
      const data = res.data.projects; // Access the 'projects' key in the response
      setProjects(data); // Set projects to the array of projects
      console.log(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Error fetching projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (loading) {
    return <div className="loading-message">Loading projects...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="project" id="project">
      <h2 className="col-span-12 mt-3 mb-1 text-center">TOP RECENT PROJECTS</h2>
      <hr />
      <p className="pb-3 text-center">Here are my projects</p>
      <div className="row" id="ads">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Fade top key={index}>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">{project.type}</span>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-image-overlay m-auto mt-3 d-flex flex-wrap pl-2 gap-1">
                    {project.techStacks.map((tech, idx) => (
                      <span key={idx} className="card-detail-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="card-body">
                    <div className="ad-title text-center">
                      <h5 className="text-uppercase">{project.name}</h5>
                    </div>
                    <a
                      className="ad-btn"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
