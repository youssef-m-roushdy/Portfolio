import React, { useState } from "react";
import "./MobileNav.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import {
  FcHome,
  FcAbout,
  FcManager,
  FcBiotech,
  FcGraduationCap,
  FcIdea,
  FcAssistant,
} from "react-icons/fc";
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <IoClose
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <IoMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={-100}
                    to="home"
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <FcAssistant />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
