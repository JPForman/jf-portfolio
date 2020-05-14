import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

function Header(){

  return(
    <div>
      <div className='header'>
        <Link className="noUnderline" to="/aboutMe">jf</Link>
        <div></div>
        <Link className="noUnderline" to="/sites">sites</Link>
        <Link className="noUnderline" to="/aboutMe">about me</Link>
        <Link className="noUnderline" to="/contact">contact</Link>
      </div>
    </div>
    )
  }
  
export default Header;
