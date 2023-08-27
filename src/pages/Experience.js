import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import FlagIcon from "@material-ui/icons/Flag";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
         <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front end Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Freelance
          </h4>
          <p>
            Helping Native Clients by building websites and Webapps...
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            COLLEGE OF APPLIED SCIENCE MALAPPURAM
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Bachelor of Science in Computer Science
          </h4>
          <p>University of Calicut</p>
        </VerticalTimelineElement>
        
       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          EMEA HIGHER SECONDARY SCHOOL KONDOTTY MALAPPURAM
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Higher Secondary
          </h4>

          <p> Bio Science</p>
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FlagIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            EMEA HIGH SCHOOL KONDOTTY MALAPPURAM
          </h3>
          <p> High School </p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
