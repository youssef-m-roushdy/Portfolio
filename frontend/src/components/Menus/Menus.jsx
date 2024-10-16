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

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img
                src="https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/448368607_1524184355200366_753398771143504029_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGw-2z4yOkLs0zynfa020XbI-btx5R92xQj5u3HlH3bFE3X27wp55_xfGT6DoRd-xPnl7GjsVsRwYKJaAhpPRdU&_nc_ohc=BNR_GuO64SsQ7kNvgE7B154&_nc_ht=scontent.fcai19-4.fna&_nc_gid=A7L9JvSnk1iveGCSXmd_FUd&oh=00_AYDNjTLMLNWU77n9_ZJ4VvRsf0H14Hdm6fnXG2rin2tZgw&oe=670D3F47"
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
