import React from "react";
import { Link } from "react-router-dom";
import { CustomInput } from "reactstrap";
import SideDrawer from "./SideDrawer";

import "./header.scss";

const Header = ({ setDarkmode, darkmode }) => {

  const linkList = [
    {content: 'projects', url: '/projects'},
    {content: 'about me', url: '/aboutme'},
    {content: 'color', url: '/neato'},
    // {content: 'drag', url: '/dragme'},
    {content: 'contact', url: '/contact'}
  ]

  return (
    <>
    <SideDrawer linkList={linkList} darkmode={darkmode} setDarkmode={setDarkmode} />
    <div className="header">
      <Link className={!darkmode ? "link" : "link-dark"} to="/aboutMe">joshua forman <span className="title">m.a.m.ed.</span></Link>
      {linkList.map((link) => (
        <Link className={!darkmode ? "link" : "link-dark"} to={link.url}>
          {link.content}
        </Link>
      ))}
      <div className='darkmode-toggle-container'>
        <span className="darkmode-label">dark mode</span>
        <CustomInput
          type="switch"
          id="darkModeSwitch"
          name="customSwitch"
          onChange={() => setDarkmode(!darkmode)}
          className="darkmode-switch"
        />
      </div>
    </div>
    </>
  );
};

export default Header;
