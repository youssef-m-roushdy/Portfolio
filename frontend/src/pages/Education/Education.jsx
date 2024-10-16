import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineSchool } from "react-icons/md";

const Education = ({theme}) => {
  return (
    <>
      <div className="container education" id="education">
        <h2 className="col-span-12 mt-3 mb-1 text-center">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: `${theme === 'light'? 'white': '#1e1e2c'}`, color: `${theme === 'light'? 'black': 'white'}` }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - 2026"
            iconStyle={{ background: `${theme === 'light'? '#138781': '#1e1e2c'}`, color: "#fff" }}
            icon={<MdOutlineSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Akhbar Alyoum Academy
            </h3>
            <h4 className="vertical-timeline-element-subtitle">6th Of October, Giza</h4>
            <p>
              
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: `${theme === 'light'? 'white': '#1e1e2c'}`, color: `${theme === 'light'? 'black': 'white'}` }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - 2026"
            iconStyle={{ background: `${theme === 'light'? '#138781': '#1e1e2c'}`, color: "#fff" }}
            icon={<MdOutlineSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              ALX Software Engineering program
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Online Sessions</h4>
            <p>
              
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
