import React from "react";
import { Link } from "react-router-dom";
import { CustomInput } from "reactstrap";

import "../css/header.css";

const Header = ({ setDarkmode, darkmode }) => {
  return (
    <div className="header">
      <Link
        className={!darkmode ? "headerLink" : "headerLink-dark"}
        to="/aboutMe"
      >
        joshua forman<span className="nameTitle">m.a.m.ed.</span>
      </Link>
      <div></div>
      <Link
        className={!darkmode ? "headerLink" : "headerLink-dark"}
        to="/projects"
      >
        projects
      </Link>
      <Link
        className={!darkmode ? "headerLink" : "headerLink-dark"}
        to="/aboutMe"
      >
        about me
      </Link>
      <Link
        className={!darkmode ? "headerLink" : "headerLink-dark"}
        to="/neato"
      >
        color
      </Link>
      <Link
        className={!darkmode ? "headerLink" : "headerLink-dark"}
        to="/contact"
      >
        contact
      </Link>
      <div className='darkmode-toggle-container'>
        <p className="darkmode-label">dark mode</p>
        <CustomInput
          type="switch"
          id="darkModeSwitch"
          name="customSwitch"
          onChange={() => setDarkmode(!darkmode)}
          className="darkmode-switch"
        />
      </div>
    </div>
  );
};

export default Header;
