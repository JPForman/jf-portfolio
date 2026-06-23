import React from "react";
import Lucerna from "../img/lucerna.png";
import FSLogo from "../img/fs_logo.svg";
import Kalpa from "../img/kalpa.png";
import Cynerge from "../img/cynerge.png";
import ClassBucksFull from "../img/ClassbucksLogoFull.jpg";
import BlazersComponent from "../img/blazersComponent.png";
import LAGalaxy from "../img/LAGalaxy.png";
import LAGalaxyComponent from "../img/LAGalaxyComponent.png";
import Theorem from '../img/theorem.png';
import Trailblazers from '../img/Trailblazers.png';
import Aflac from '../img/Aflac.png';
import Footer from "./Footer";

import "./projects.scss";

const Projects = ({ darkmode }) => {
  return (
    <div className="main-container">
      <div className={`title-wrapper ${darkmode ? "dark" : ''}`}>
        <span className="title">Projects</span>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            I am an Application Developer at Lucerna Digital, where I build customized client applications using React, Google Firebase, and PostgreSQL. I design and maintain automated CI/CD pipelines and apply AI-assisted development tools including Claude Code and Cursor to accelerate feature delivery and improve code quality.
          </span>
        </div>
        <div className="img-wrapper">
          <img className={`project-img${!darkmode ? ' project-img-invert' : ''}`} src={Lucerna} alt="Lucerna Digital lantern logo" />
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            At Cynerge Consulting, I was on contract with the federal govenmnet. I was a front end Angular developer for a federal mission-tracking and reporting system as part of the U.S. Forest Service and BLM Smokejumper modernization effort. The application runs within a secure VPN environment and required federal security clearance, supporting real-time tracking of smokejumper missions, ancillary logistics, and incident reporting for field operations.
          </span>
        </div>
        <div className="img-wrapper">
          <img className="project-img" src={FSLogo} alt="U.S. Forest Service logo" />
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            Kalpa v4 is a professional development reporting system I helped lead from inception at Cynerge Consulting. I helped defined the Angular component architecture, built data visualization features with ChartJS, and implemented AWS Cognito authentication with federated social sign-in. Stack: Angular, Angular Material, ChartJS, AWS Amplify, Node.js, Express, Sequelize, PostgreSQL, AWS Aurora.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://kalpasolutions.com/">
            <img className="project-img" src={Kalpa} alt="Kalpa Solutions logo" />
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            Keepsake is a cross-platform React Native proof-of-concept for iOS and Android that I built at Cynerge Consulting for tracking and sharing family heirlooms. It integrates native camera, video, and photo library APIs with cloud authentication, file storage, and NoSQL persistence via AWS Amplify (Cognito, S3, DynamoDB).
          </span>
        </div>
          <div className="img-wrapper">
          <img className="project-img" src={Cynerge} alt="Cynerge Consulting logo" />
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            I built ClassBucks, a gamified classroom management platform, from the ground up as sole lead developer — taking the product from concept to production. I collaborated with stakeholders to translate product goals into actionable development tasks and sprint plans. Stack: React, Bootstrap, Google Firebase.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://classbucks.com/">
            <img className="project-img" src={ClassBucksFull} alt="ClassBucks logo" />
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            Before ClassBucks, I was a front-end developer intern at Theorem Agency where I delivered React components for enterprise clients including Aflac Insurance, the Portland Trail Blazers, and the LA Galaxy. We built clean front-end experiences and processed analytic reports to support informed business decisions.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://theoreminc.net/" className={!darkmode ? "theorem" : 'theorem-dark'}>
            <img className="project-img" src={Theorem} alt="Theorem Agency logo" />
          </a>
          <div className="theorem-group">
            <img src={LAGalaxy} alt="LA Galaxy" />
            <img src={Trailblazers} alt="Portland Trail Blazers" />
            <img src={Aflac} alt="Aflac" />
          </div>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            This is a Player Stats component I built in React as part of the pregame, game, and postgame application designed at Theorem Agency for the Portland Trail Blazers. Player images and numbers are drawn dynamically from the NBA CDN.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://theoreminc.net/">
            <img className="project-img" src={BlazersComponent} alt="Portland Trail Blazers player stats component" />
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            This is a single ticket page component I built in React for the LA Galaxy during my time at Theorem Agency, as part of a larger ticket-purchasing experience.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://theoreminc.net/">
            <img className="project-img" src={LAGalaxyComponent} alt="LA Galaxy ticket component" />
          </a>
        </div>
      </div>

      <Footer darkmode={darkmode} />
    </div>
  );
};

export default Projects;
