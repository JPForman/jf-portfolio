import React from 'react';
import '../css/projects.css';
import MyForest from '../img/myForest.png';
import Railz from '../img/Railz.png';
import Ganesha from '../img/GaneshaKambucha.png';


function Projects(){

  return(
    <div>
      <div className='titleWrapper'>
        <h1 className='title'>Projects</h1>
      </div>

      <div className='block'>
        <div className=''>
          <a href='https://dry-forest-61437.herokuapp.com/'>
            <img className='myForestImg' src={MyForest}></img>
          </a>
        </div>
        <div className='wordWrapper'>
          <h1 className='wordContent'>myForest</h1>
          <h3 className='wordContent'>MyForest is an application built in react for the purpose of letting users tack and visually represent personal habits, events, and data.</h3>
        </div>
      </div>

      <div className='block'>
        <div className='wordWrapper'>
          <h1 className='wordContent'>Railz</h1>
          <h3 className='wordContent'>Railz is a skate spot finder built with Ruby on Railz with bCrypt authentication and Google API maps. I was part of a team in creating this project.</h3>
          <h5>login: admin@admin.com</h5>
          <h5>pw: 123</h5>
        </div>
        <div className=''>
          <a href='https://damp-basin-71037.herokuapp.com/spots'>
            <img className='myForestImg' src={Railz}></img>
          </a>
        </div>
      </div>

      <div className='block'>
        <div className='ganeshaWrapper'>
          <a href='https://aqueous-earth-35152.herokuapp.com/#/'>
            <img className='ganeshaImg' src={Ganesha}></img>
          </a>
        </div>
        <div className='wordWrapper'>
          <h1 className='wordContent'>Ganesha's Kambucha House</h1>
          <h3 className='wordContent'>MyForest is an application built in react for the purpose of letting users tack and visually represent personal habits, events, and data.</h3>
        </div>
      </div>

    </div>
    )
  }
  
export default Projects;
