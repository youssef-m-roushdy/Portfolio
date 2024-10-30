import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import portfolioImage from '../../assets/imgs/img.jpeg';

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="d-flex">
            <div className="about-img d-flex">
              <img
                src={portfolioImage}
                alt="profile_pic"
              />
            </div>
            <div className=" about-content">
              <h1>About me</h1>
              <p>
                I am a dedicated software engineer with a strong focus on web
                development, bringing expertise in backend and frontend
                technologies. With extensive experience in programming languages
                like Python, JavaScript, C, and C#, as well as frameworks like
                Express.js and .NET, I am skilled in building efficient,
                scalable, and user-friendly applications. My DevOps knowledge,
                including Docker and computer network management, enhances my
                ability to streamline development workflows and ensure smooth
                deployment processes. Additionally, I’m well-versed in database
                management, both SQL and NoSQL, which allows me to optimize data
                storage and retrieval for robust application performance.
                Currently, I am seeking to leverage my skills in a junior
                backend role where I can contribute to and learn from a dynamic
                team.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
