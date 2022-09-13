import React from "react";
import MyForest from "../img/myForest.png";
import BlazersComponent from "../img/blazersComponent.png";
import LAGalaxy from "../img/LAGalaxy.png";
import LAGalaxyComponent from "../img/LAGalaxyComponent.png";
import HRDash from "../img/TheoremDash.png";
import ClassBucksFull from "../img/ClassbucksLogoFull.jpg";
import PaulysPizza from "../img/PaulysPizza.png";
import wordsy from "../img/wordsy.png";
import Theorem from '../img/theorem.png'
import Trailblazers from '../img/Trailblazers.png'
import Aflac from '../img/Aflac.png'
import Footer from "./Footer";

import "./projects.scss";

const Projects = ({ darkmode }) => {
  return (
    <div className="main-container">
      <div className={`title-wrapper ${darkmode ? "dark" : ''}`}>
        <span className="title" >Projects</span>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content"> I am the lead developer for an educational web application built using a React, SCSS, Firebase stack. This is a fun app that gamifies the classroom experience! I have been working there since 2020.</span>
        </div>
        <div className="img-wrapper">
          <a href="https://classbucks.com/">
            <img className="project-img" src={ClassBucksFull} alt='classbucks logo' />
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            Before working at ClassBucks, I was a front-end developer intern at Theorem Agency where I created client deliverables for companies such as Aflac Insurance, the Portland Trailblazers, and the LA Galaxy. We worked to both create clean front end experiences, as well as process analytic reports for well informed business decisions.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://theoreminc.net/" className={!darkmode ? "theorem" : 'theorem-dark'}>
            <img className="project-img" src={Theorem}></img>
          </a>
          <div className="theorem-group">
            <img className="" src={LAGalaxy}></img>
            <img className="" src={Trailblazers}></img>
            <img className="" src={Aflac}></img>
          </div>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            This is a Player Stats component I built in React as part of the
            pregame, game, and postgame application designed at Theorem Agency for the Portland Trailblazers. Player images and numbers drawn dynamically from the NBA cdn.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://theoreminc.net/" className="">
            <img className="project-img" src={BlazersComponent} />
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            This is a component I built in React for the LA Galaxy single ticket page. I built this as part of a larger project for the LA Galaxy during my time at Theorem Agency.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://theoreminc.net/" className="">
            <img className="project-img" src={LAGalaxyComponent}></img>
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            This HR Portal is an application that was built with React as an internal human resources dashboard. I built this project with Kyle Wymer and Marcus Jensen.
          </span>
          <span>login: samantha@theorem.com</span>
          <span>pw: test2</span>
        </div>
        <div className="img-wrapper">
          <a href="https://safe-thicket-26720.herokuapp.com/#/">
            <img className="project-img" src={HRDash}></img>
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">Pauly's Pizza</span>
          <span className="word-content">
            Pauly's Pizza is a simple React app with a mock menu, ordering capabilities, checkout, and a neat little in-store app that can track the pizza workflow. Inspired as an answer to some crazy green screen technology I saw at a fast food place. 
          </span>
        </div>
        <div className="img-wrapper">
          <a href="http://paulys.cyborgforman.me/">
            <img className="project-img" src={PaulysPizza}></img>
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">wordsy</span>
          <span className="word-content">
            This is a little word definition game using the Merriam Webster API meant for mobile devices so I can look at some words while sipping coffee. It's built with React and SCSS. Love the squirl. Turns out there is already a game named wordsy, so I'll probably change the name :) It is a fun app that I just wanted to make in order to play. I can't wait to take some time to build this out some more!
          </span>
        </div>
        <div className="img-wrapper">
          <a href="http://wordsy.cyborgforman.me/">
            <img className="project-img" src={wordsy}></img>
          </a>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">myForest</span>
          <span className="word-content">
            MyForest is an application built in React for the purpose of letting users tack and visually represent personal habits, events, and data. It's really old code, and needs work, but it's just so cute to me.
          </span>
        </div>
        <div className="img-wrapper">
          <a href="https://myforest-4ec7f.web.app/">
            <img className="project-img" src={MyForest}></img>
          </a>
        </div>
      </div>
      <Footer darkmode={darkmode} />
    </div>
  );
};

export default Projects;
