import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import {
  FcHome,
  FcAbout,
  FcManager,
  FcBiotech,
  FcGraduationCap,
  FcIdea,
  FcAssistant,
} from "react-icons/fc";

import portfolioImage from '../../assets/imgs/img.jpeg';

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img
                src={portfolioImage}
                alt="profile pic"
              />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={-100}
                    to="home"
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={-100}
                    to="about"
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={-100}
                    to="education"
                  >
                    <FcGraduationCap />
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={-100}
                    to="tech-stack"
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={-100}
                    to="project"
                  >
                    <FcIdea />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={-100}
                    to="work-experience"
                  >
                    <FcManager />
                    Work Experience
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={-100}
                    to="contact"
                  >
                    <FcAssistant />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={-100}
                to="home"
              >
                <FcHome />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={-100}
                to="about"
              >
                <FcAbout />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={-100}
                to="education"
              >
                <FcGraduationCap />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={-100}
                to="tech-stack"
              >
                <FcBiotech />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={-100}
                to="project"
              >
                <FcIdea />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={-100}
                to="work-experience"
              >
                <FcManager />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={-100}
                to="contact"
              >
                <FcAssistant />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
