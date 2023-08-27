import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Link } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Muhammad Unais ak</h2>
        <div className="prompt">
          <p>
            A motivated and versatile individual with <br/>a passion for
            learning and creating.
          </p>

          <Link
            href="http://www.linkedin.com/im/muhammad-unais-ak-0510a325b"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link href="http://www.muhammadunaisak@gmail.com" target="_blank">
            <EmailIcon />
          </Link>
          <Link href="http://www.github.com/uncode11/" target="_blank">
            <GithubIcon />
            </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, Flutter, NPM, , BootStrap, MaterialUI,
              figma, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, GraphQL, MySQL, MongoDB, wamp, MS
              SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
