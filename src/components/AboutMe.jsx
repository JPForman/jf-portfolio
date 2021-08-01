import React from "react";
import { Link } from "react-router-dom";
import "../css/aboutMe.css";
import AksharDave from "../img/AksharDave.jpg";
import MeMash from "../img/MeMash.png";
import SriYantra from "../img/SriYantra.png";
import LAGalaxy from "../img/LAGalaxy.png";
import Trailblazers from "../img/Trailblazers.png";
import Aflac from "../img/Aflac.png";
import Epicodus from "../img/Epicodus.png";
import DePaul from "../img/depaul.png";
import WSU from "../img/wsu.png";
import DATA from "../img/DATAlogo.jpg";
import CTDHS from "../img/ctdhs.jpg";
import Editing from "../img/editing.jpg";
import ClassBucksLogo from "../img/ClassBucksLogo.jpg";
import Footer from "./Footer";

const AboutMe = ({ darkmode }) => {
  return (
    <div>
      <div className={!darkmode ? "nameWrapper" : "nameWrapper-dark"}>
        <h1 className="name">hello, my name is Joshua Forman</h1>
      </div>
      <div className="block">
        <div className="imgWrapperA">
          <img className="meImg" src={MeMash}></img>
        </div>
        <h3 className="wordContent">
          I am a front end developer. Most recently I have been working with a
          ton of React to create a classroom management and content delivery
          educational web app at ClassBucks.
        </h3>
      </div>

      <div className="block">
        <h3 className="wordContent">
          I love math, film, education, and programming. While I'm not coding at
          ClassBucks, I teach part-time programming and yoga classes at an DATA
          Albuquerque Charter School.
        </h3>
        <div className="imgWrapperB">
          <a href="https://classbucks.com/">
            <img className="classImg" src={ClassBucksLogo}></img>
          </a>
          <a href="http://datacharter.org/">
            <img className="dataImg" src={DATA}></img>
          </a>
        </div>
      </div>

      <div className="block">
        <div className="imgWrapperA theoremWrapper">
          <a href="https://theoremadvertising.com/" className={!darkmode ? "theorem" : 'theorem-dark'}>
            theorem agency
          </a>
          <div className="theoremCompanies">
            <img className="LAGalaxyImg" src={LAGalaxy}></img>
            <img className="TrailblazersImg" src={Trailblazers}></img>
            <img className="AflacImg" src={Aflac}></img>
          </div>
        </div>
        <h3 className="wordContent">
          Before working at ClassBucks, I was a front-end developer intern at
          Theorem Agency where I created client deliverables for companies such
          as Aflac Insurance, the Portland Trailblazers, and the LA Galaxy. We
          worked to both create clean front end experiences, as well as process
          analytic reports for well informed business decisions.
        </h3>
      </div>

      <div className="full-content">
        <h2 className="wordContent">
          I am enamored with programming and can't wait to see where it takes me
          next!
        </h2>
      </div>

      <div className="block">
        <div className="schoolsAttended">
          <a href="https://www.depaul.edu/Pages/default.aspx">
            <img className="schoolAttended" src={DePaul}></img>
          </a>
          <a href="https://www.epicodus.com/">
            <img className="schoolAttended" src={Epicodus}></img>
          </a>
          <a href="https://wayne.edu/">
            <img className="schoolAttended" src={WSU}></img>
          </a>
        </div>
        <h3 className="wordContent">
          I was trained to program at Epicodus in Portland, Oregon. I hold a
          Masters in Mathematics Education from DePaul University and a BA in
          Philosophy from Wayne State University.
        </h3>
      </div>

      <div className="block">
        <h3 className="wordContent">
          Before getting into programming, I taught mathematics, yoga, and film
          editing for 8 years.
        </h3>
        <div className="imgWrapperB schoolsTaught">
          <a href="http://datacharter.org/">
            <img className="schoolTaught" src={DATA}></img>
          </a>
          <img className="schoolTaught" src={CTDHS}></img>
        </div>
      </div>

      <div className="block">
        <div className="imgWrapperA">
          <img className="editing" src={Editing}></img>
        </div>
        <h3 className="wordContent">
          Prior to teaching, I was a professional video editor in Chicago for
          about 7 years.
        </h3>
      </div>

      <Footer darkmode={darkmode} />
    </div>
  );
};

export default AboutMe;
