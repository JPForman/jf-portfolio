import React from 'react';
import '../css/projects.css';
import MyForest from '../img/myForest.png';


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

    </div>
    )
  }
  
export default Projects;
