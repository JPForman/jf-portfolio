import React from "react";
import "../css/projects.scss";
import MyForest from "../img/myForest.png";
import Railz from "../img/Railz.png";
import Ganesha from "../img/GaneshaKambucha.png";
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

const Projects = ({ darkmode }) => {
  return (
    <div className="projects-container">
      <div className={!darkmode ? "titleWrapper" : 'titleWrapper-dark'}>
        <h1 className="title" >Projects</h1>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <span className="wordContent"> I am the lead developer for an educational web application built using a React, SCSS, Firebase stack. This is a fun app that gamifies the classroom experience! I have been working there since 2020.</span>
        </div>
        <div className="imgWrapper">
          <a href="https://classbucks.com/">
            <img className="project-img" src={ClassBucksFull} alt='classbucks logo' />
          </a>
        </div>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <span className="wordContent">
            Before working at ClassBucks, I was a front-end developer intern at Theorem Agency where I created client deliverables for companies such as Aflac Insurance, the Portland Trailblazers, and the LA Galaxy. We worked to both create clean front end experiences, as well as process analytic reports for well informed business decisions.
          </span>
        </div>
        <div className="imgWrapper">
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
        <div className="wordWrapper">
          <span className="wordContent">
            This is a Player Stats component I built in React as part of the
            pregame, game, and postgame application designed at Theorem Agency for the Portland Trailblazers. Player images and numbers drawn dynamically from the NBA cdn.
          </span>
        </div>
        <div className="imgWrapper">
          <a href="https://theoreminc.net/" className="">
            <img className="project-img" src={BlazersComponent} />
          </a>
        </div>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <span className="wordContent">
            This is a component I built in React for the LA Galaxy single ticket page. I built this as part of a larger project for the LA Galaxy during my time at Theorem Agency.
          </span>
        </div>
        <a href="https://theoreminc.net/" className="">
          <img className="project-img" src={LAGalaxyComponent}></img>
        </a>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <span className="wordContent">
            This HR Portal is an application that was built with React as an internal human resources dashboard. I built this project with Kyle Wymer and Marcus Jensen.
          </span>
          <span>login: samantha@theorem.com</span>
          <span>pw: test2</span>
        </div>
        <div className="imgWrapper">
          <a href="https://safe-thicket-26720.herokuapp.com/#/">
            <img className="project-img" src={HRDash}></img>
          </a>
        </div>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <span className="wordContent">Pauly's Pizza</span>
          <span className="wordContent">
            Pauly's Pizza is a simple React app with a mock menu, ordering capabilities, checkout, and a neat little in-store app that can track the pizza workflow. Inspired as an answer to some crazy green screen technology I saw at a fast food place. 
          </span>
        </div>
        <div className="imgWrapper">
          <a href="http://paulys.cyborgforman.me/">
            <img className="project-img" src={PaulysPizza}></img>
          </a>
        </div>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <span className="wordContent">wordsy</span>
          <span className="wordContent">
            This is a little word definition game using the Merriam Webster API meant for mobile devices so I can look at some words while sipping coffee. It's built with React and SCSS. Love the squirl. Turns out there is already a game named wordsy, so I'll probably change the name :) It is a fun app that I just wanted to make to use. I can't wait to take some time to build this out some more!
          </span>
        </div>
        <div className="imgWrapper">
          <a href="http://wordsy.cyborgforman.me/">
            <img className="project-img" src={wordsy}></img>
          </a>
        </div>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <span className="wordContent">myForest</span>
          <span className="wordContent">
            MyForest is an application built in React for the purpose of letting users tack and visually represent personal habits, events, and data. It's really old code, and needs work, but it's just so cute to me.
          </span>
        </div>
        <div className="imgWrapper">
          <a href="http://myforest.cyborgforman.me/#/">
            <img className="project-img" src={MyForest}></img>
          </a>
        </div>
      </div>







      {/* <div className="block">
        <a href="https://aqueous-earth-35152.herokuapp.com/#/">
          <div className="ganeshaWrapper">
            <img className="ganeshaImg" src={Ganesha}></img>
          </div>
        </a>
        <div className="wordWrapper">
          <h1 className="wordContent">Ganesha's Kambucha House</h1>
          <h3 className="wordContent">
            Ganesha's Kambucha House is a tap room applicataion built in React
            that allows users to add new brews and subtract pints as they sell.
          </h3>
        </div>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <h1 className="wordContent">Railz</h1>
          <h3 className="wordContent">
            Railz is a skate spot finder built with Ruby on Railz with bCrypt
            authentication and Google API maps. I was part of a team in creating
            this project.
          </h3>
          <h6>login: admin@admin.com</h6>
          <h6>pw: 123</h6>
        </div>
        <div className="">
          <a href="https://damp-basin-71037.herokuapp.com/spots">
            <img className="project-img" src={Railz}></img>
          </a>
        </div>
      </div> */}

      <Footer darkmode={darkmode} />
    </div>
  );
};

export default Projects;
