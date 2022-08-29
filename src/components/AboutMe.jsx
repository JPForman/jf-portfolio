import React from "react";
import { Link } from "react-router-dom";
import AksharDave from "../img/AksharDave.jpg";
import MeMash from "../img/MeMash.png";
import SriYantra from "../img/SriYantra.png";
import Theorem from '../img/theorem.png'
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

import "../css/aboutMe.css";

const AboutMe = ({ darkmode }) => {
  return (
    <div className="main-container">
      <div className={`title-wrapper ${darkmode ? "dark" : ''}`}>
        <span className="title">hello, my name is Joshua Forman</span>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
          I am the lead developer at Class Bucks Llc., a company committed to supporting teachers with a classroom management and content delivery educational web app. My daily stack includes JavaScript, React, Firebase, and SCSS. I work with great people and love what I do.
          </span>
        </div>
        <div className="img-wrapper">
          <img className="project-img" src={MeMash}></img>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
          I enjoy math, learning, communication, and expanding my programming horizons. While I'm not coding at ClassBucks, I sometimes teach programming and yoga classes at DATA Albuquerque Charter School.
          </span>
        </div>

        <div className="img-wrapper">
          <div className="link-row">
            <a href="https://classbucks.com/" className="">
              <img className="row-img" src={ClassBucksLogo}></img>
            </a>
            <a href="http://datacharter.org/" className="">
              <img className="row-img" src={DATA}></img>
            </a>
          </div>
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
        <span className="word-content">
          Programming Is Cool!
        </span>
      </div>
      <div></div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            I was trained to program at Epicodus in Portland, Oregon. I hold a
            Masters in Mathematics Education from DePaul University and a BA in
            Philosophy from Wayne State University.
          </span>
        </div>
        <div className="img-wrapper">
          <div className="link-row">
            <a href="https://www.depaul.edu/Pages/default.aspx">
              <img className="row-img" src={DePaul}></img>
            </a>
            <a href="https://www.epicodus.com/">
              <img className="row-img" src={Epicodus}></img>
            </a>
            <a href="https://wayne.edu/">
              <img className="row-img" src={WSU}></img>
            </a>
          </div>
        </div>
      </div>

      <div className="block">
        <div className="word-wrapper">
          <span className="word-content">
            Before getting into programming, I taught mathematics, yoga, and film
            editing for 8 years.
          </span>
        </div>
        <div className="img-wrapper">
          <div className="link-row">
            <a href="http://datacharter.org/">
              <img className="row-img" src={DATA}></img>
            </a>
            <img className="row-img" src={CTDHS}></img>
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
          <img className="editing" src={Editing}></img>
        </div>
      </div>

      <Footer darkmode={darkmode} />
    </div>
  );
};

export default AboutMe;
