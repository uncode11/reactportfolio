import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import LinkIcon from '@material-ui/icons/Link';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="shos" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
      <LinkIcon/>
    </div>
  );
}

export default ProjectDisplay;
