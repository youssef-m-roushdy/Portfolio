import React, { useEffect, useState } from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const handleDelete = async (projectId) => {
    try {
      const token = localStorage.getItem('auth-token');
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/v1/projects/${projectId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Optionally update the projects list after deletion
      window.location.reload("/")
    } catch (error) {
      console.error('Failed to delete', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode the token
        setUser(decoded); // Set user data to state
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  const getProjects = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/projects`);
      const data = res.data.projects; // Access the 'projects' key in the response
      setProjects(data); // Set projects to the array of projects
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
      {user?.isAdmin 
      ? (<Fade left><Link class="add-prject-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to="add-project">Add New Project</Link></Fade>) 
      : (<p className="pb-3 text-center">"Here are my projects"</p>)}
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
                    {user?.isAdmin && (
                      <div className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          onClick={() => handleDelete(project._id)}
                        >
                          Delete
                        </button>
                        <Link
                          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                          to={`/update-project/${project._id}`}
                        >
                          Update
                        </Link>
                      </div>
                    )}
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
