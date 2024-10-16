import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/448368607_1524184355200366_753398771143504029_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGw-2z4yOkLs0zynfa020XbI-btx5R92xQj5u3HlH3bFE3X27wp55_xfGT6DoRd-xPnl7GjsVsRwYKJaAhpPRdU&_nc_ohc=BNR_GuO64SsQ7kNvgE7B154&_nc_ht=scontent.fcai19-4.fna&_nc_gid=A7L9JvSnk1iveGCSXmd_FUd&oh=00_AYDNjTLMLNWU77n9_ZJ4VvRsf0H14Hdm6fnXG2rin2tZgw&oe=670D3F47"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
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
