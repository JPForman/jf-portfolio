import React from "react";
import MeMash from "../img/MeMash.png";
import Lucerna from "../img/lucerna.png";
import FSLogo from "../img/fs_logo.svg";
import Kalpa from "../img/kalpa.png";
import ClassBucksFull from "../img/ClassbucksLogoFull.jpg";
import Theorem from '../img/theorem.png';
import LAGalaxy from "../img/LAGalaxy.png";
import Trailblazers from "../img/Trailblazers.png";
import Aflac from "../img/Aflac.png";
import Epicodus from "../img/Epicodus.png";
import DePaul from "../img/depaul.png";
import WSU from "../img/wsu.png";
import DATA from "../img/DATAlogo.jpg";
import CTDHS from "../img/ctdhs.jpg";
import Editing from "../img/editing.jpg";
import Footer from "./Footer";

import "../css/aboutMe.css";

const AboutMe = ({ darkmode }) => {
  return (
    <div className="main-container">
      <div className={`title-wrapper ${darkmode ? "dark" : ''}`}>
        <span className="title about-me">hello, my name is Joshua Forman</span>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            I am a full-stack developer with 6+ years building production web and mobile applications across education, government, and startup environments. Currently I'm an Application Developer at Lucerna Digital, where I build customized client applications using React, Google Firebase, and PostgreSQL with a focus on clean architecture and rapid iteration.
          </span>
        </div>
        <div className="img-wrapper">
          <img className="project-img" src={MeMash} alt="Joshua Forman" />
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            At Lucerna Digital I design and maintain automated CI/CD pipelines, apply AI-assisted development tools including Claude Code and Cursor to accelerate feature delivery, and contribute to product strategy and customer outreach as well as the technical side of things.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://www.lucernadigital.com/">
            <img className={`project-img${!darkmode ? ' project-img-invert' : ''}`} src={Lucerna} alt="Lucerna Digital logo" />
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            Before Lucerna, I was an Application Developer at Cynerge Consulting. There I developed the Angular front-end for a federal mission-tracking system as part of the U.S. Forest Service and BLM Smokejumper modernization effort, working within a secure VPN environment with federal security clearance.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://www.fs.usda.gov/">
            <img className="project-img" src={FSLogo} alt="U.S. Forest Service logo" />
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            Also at Cynerge, I led Angular front-end development of Kalpa v4, a professional development reporting system, from inception. I defined the component architecture, built data visualization features with ChartJS, and implemented AWS Cognito authentication with federated social sign-in. Stack: Angular, Angular Material, ChartJS, AWS Amplify, Node.js, Express, Sequelize, PostgreSQL, AWS Aurora.
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
            Prior to Cynerge, I was the Lead Application Developer at Class Bucks LLC, where I built a gamified classroom management platform from the ground up as sole lead developer, taking it from concept to production. Stack: React, Bootstrap, Google Firebase.
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
            I got my start as a front-end developer intern at Theorem Agency, where I delivered React components for enterprise clients including Aflac Insurance, the Portland Trail Blazers, and the LA Galaxy. We worked within an agile team to meet tight client deadlines with polished, responsive UI.
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
            I was trained to program at Epicodus in Portland, Oregon. I hold a Master of Arts in Mathematics Education from DePaul University and a Bachelor of Arts in Philosophy from Wayne State University.
          </span>
        </div>
        <div className="img-wrapper">
          <div className="link-row">
            <a href="https://www.epicodus.com/">
              <img className="row-img" src={Epicodus} alt="Epicodus" />
            </a>
            <a href="https://www.depaul.edu/Pages/default.aspx">
              <img className="row-img" src={DePaul} alt="DePaul University" />
            </a>
            <a href="https://wayne.edu/">
              <img className="row-img" src={WSU} alt="Wayne State University" />
            </a>
          </div>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            Before getting into programming, I taught mathematics, yoga, and film editing.
          </span>
        </div>
        <div className="img-wrapper">
          <div className="link-row">
            <a href="http://datacharter.org/">
              <img className="row-img" src={DATA} alt="DATA Albuquerque Charter School" />
            </a>
            <img className="row-img" src={CTDHS} alt="CTDHS" />
          </div>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            Prior to teaching, I was a professional video editor in Chicago.
          </span>
        </div>
        <div className="img-wrapper">
          <img className="editing" src={Editing} alt="video editing" />
        </div>
      </div>

      <Footer darkmode={darkmode} />
    </div>
  );
};

export default AboutMe;
