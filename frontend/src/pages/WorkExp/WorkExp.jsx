import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";

const WorkExp = ({theme}) => {
  return (
    <>
      <div className="container work" id="work-experience">
        <div className="work-exp">
          <h2 className="col-span-12 mt-3 mb-1 text-center">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: `${theme === 'light'? 'white': '#1e1e2c'}`, color: `${theme === 'light'? 'black': 'white'}` }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - 2026"
            iconStyle={{ background: `${theme === 'light'? '#138781': '#1e1e2c'}`, color: "#fff" }}
            icon={<FaReact />}
          >
              <h3 className="vertical-timeline-element-title">
                FullStack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Nuerontix</h4>
              <p>
                Gain experience of developing web pages using MERN stack and
                project management with hand experience on real-world projects
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
