import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

function Header(){

  return(
    <div>
      <div className='header'>
        <Link className="headerLink" to="/aboutMe">joshua forman<span className='nameTitle'>m.a.m.ed.</span></Link>
        <div></div>
        <Link className="headerLink" to="/projects">projects</Link>
        <Link className="headerLink" to="/aboutMe">about me</Link>
        <Link className="headerLink" to="/neato">color</Link>
        <Link className="headerLink" to="/contact">contact</Link>
      </div>
    </div>
    )
  }
  
export default Header;
