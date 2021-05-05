import React from "react";
import "../css/projects.css";
import MyForest from "../img/myForest.png";
import Railz from "../img/Railz.png";
import Ganesha from "../img/GaneshaKambucha.png";
import BlazersComponent from "../img/blazersComponent.png";
import LAGalaxy from "../img/LAGalaxyComponent.png";
import HRDash from "../img/TheoremDash.png";
import ClassBucksFull from "../img/ClassbucksLogoFull.jpg";
import PaulysPizza from "../img/PaulysPizza.png";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div>
      <div className="titleWrapper">
        <h1 className="title">Projects</h1>
      </div>

      <div className="block">
        <div className="">
          <a href="https://sheltered-depths-26577.herokuapp.com/">
            <img className="myForestImg" src={PaulysPizza}></img>
          </a>
        </div>
        <div className="wordWrapper">
          <h1 className="wordContent">Pauly's Pizza</h1>
          <h3 className="wordContent">
            Pauly's Pizza is a React app I made for fun. I made this to play around with an SCSS transpiler and to work with some new React concepts I have been learning. The app has a menu built out with ordering capability, along with a neat little in-store app that can track the pizza workflow.
          </h3>
        </div>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <h1 className="wordContent">ClassBucks</h1>
          <h3 className="wordContent">
            I am the lead developer for an educational web application built in
            React. This is a cool app that gamifies classroom management! Due to
            patent and IP concerns, samples of this code can be seen on request.
          </h3>
        </div>
        <div className="">
          <a href="https://classbucks.com/">
            <img className="classfull-img" src={ClassBucksFull}></img>
          </a>
        </div>
      </div>

      <div className="block">
        <div className="">
          <a href="https://dry-forest-61437.herokuapp.com/">
            <img className="myForestImg" src={MyForest}></img>
          </a>
        </div>
        <div className="wordWrapper">
          <h1 className="wordContent">myForest</h1>
          <h3 className="wordContent">
            MyForest is an application built in react for the purpose of letting
            users tack and visually represent personal habits, events, and data.
          </h3>
        </div>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <h1 className="wordContent">Trailblazers Key Player Stats</h1>
          <h3 className="wordContent">
            This is a Key Player Stats component built in React as part of the
            pregame, game, and postgame application designed at Theorem Agency
            for the Portland Trailblazers. Player images and numbers drawn
            dynamically from the NBA cdn.
          </h3>
        </div>
        <div className="">
          <img className="myForestImg" src={BlazersComponent}></img>
        </div>
      </div>

      <div className="block">
        <div className="galaxyWrapper">
          <img className="ganeshaImg" src={LAGalaxy}></img>
        </div>
        <div className="wordWrapper">
          <h1 className="wordContent">
            LA Galaxy Featured Game Ticket Component
          </h1>
          <h3 className="wordContent">
            This is a component built in React for the LA Galaxy single ticket
            page. I built this as part of a larger project for the LA Galaxy
            during my internship at Theorem Agency.
          </h3>
        </div>
      </div>

      <div className="block">
        <div className="wordWrapper">
          <h1 className="wordContent">HR Portal</h1>
          <h3 className="wordContent">
            HR Portal is an application that was built with React as an internal
            human resources dashboard. I built this project with Kyle Wymer and
            Marcus Jensen.
          </h3>
          <h6>login: samantha@theorem.com</h6>
          <h6>pw: test2</h6>
        </div>
        <div className="">
          <a href="https://safe-thicket-26720.herokuapp.com/#/">
            <img className="myForestImg" src={HRDash}></img>
          </a>
        </div>
      </div>

      <div className="block">
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
            <img className="myForestImg" src={Railz}></img>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
