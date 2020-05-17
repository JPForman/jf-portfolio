import React from 'react';
import '../css/aboutMe.css';
import AksharDave from '../img/AksharDave.jpg';


function AboutMe(){

  return(
    <div>
      <div className='block'>
        <div className='imgWrapperA'>
          <img className='mathImg' src={AksharDave}></img>
        </div>
        <h3 className='love'>I am a front end developer having most recently worked with Reactjs, JS, and SCSS.</h3>
      </div>

      <div className='block'>
        <h3 className='love'>I love, math, film, education, and programming.</h3>
        <div className='imgWrapperB'>
        <img className='mathImg' src={AksharDave}></img>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;



{/* <p>i love math, film, and programming. recently i finished an internship at theorem agency where i worked primarily in reactjs. i created client deliverables for companies such as aflac insurance, the portland trailblazers, and the la galaxy. we worked to both create clean front end experiences, as well as process analytic reports for well informed business decisions. i was trained to program at epicodus in portland. i am enamored with programming and can't wait to see where it takes me next!</p> */}