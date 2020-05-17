import React from 'react';
import '../css/aboutMe.css';
import AksharDave from '../img/AksharDave.jpg';
import MeMash from '../img/MeMash.png';
import SriYantra from '../img/SriYantra.png';
import LAGalaxy from '../img/LAGalaxy.png';
import Trailblazers from '../img/Trailblazers.png';
import Aflac from '../img/Aflac.png';


function AboutMe(){

  return(
    <div>
      <div className='block'>
        <div className='imgWrapperA'>
          <img className='meImg' src={MeMash}></img>
        </div>
        <h3 className='wordContent'>I am a front end web and app developer. Most recently I have been working with Reactjs, JS, and SCSS.</h3>
      </div>

      <div className='block'>
        <h3 className='wordContent'>I love math, film, education, and programming.</h3>
        <div className='imgWrapperB'>
          <img className='mathImg' src={SriYantra}></img>
        </div>
      </div>

      <div className='block'>
        <div className='imgWrapperA theoremWrapper'>
          <p className='theorem'>theorem</p>
          <div className='theoremCompanies'>
            <img className='LAGalaxyImg' src={LAGalaxy}></img>
            <img className='TrailblazersImg' src={Trailblazers}></img>
            <img className='AflacImg' src={Aflac}></img>
          </div>
        </div>
        <h3 className='wordContent'>Recently I finished an internship at Theorem Agency where I created client deliverables for companies such as Aflac Insurance, the Portland Trailblazers, and the LA Galaxy. We worked to both create clean front end experiences, as well as process analytic reports for well informed business decisions.</h3>
      </div>

      <div className='block'>
        <h3 className='wordContent'>I am enamored with programming and can't wait to see where it takes me next!</h3>
        <div className='imgWrapperB'>
        <img className='diamondImg' src={AksharDave}></img>
        </div>
      </div>

      <div className='block'>
        <div className='imgWrapperA'>
        <img className='diamondImg' src={AksharDave}></img>
        </div>
        <h3 className='wordContent'>I was trained to program at Epicodus in Portland, Oregon. I hold a Masters in Mathematics Education from DePaul University and a BA in Philosophy from Wayne State University.</h3>
      </div>

      <div className='block'>
        <h3 className='wordContent'>Before getting into programming, I taught mathematics, yoga, and film editing for 8 years.</h3>
        <div className='imgWrapperB'></div>
      </div>

      <div className='block'>
        <div className='imgWrapperA'>
        <img className='diamondImg' src={AksharDave}></img>
        </div>
        <h3 className='wordContent'>Prior to teaching, I was a professional video editor in Chicago for about 7 years.</h3>
      </div>


    </div>
  )
}

export default AboutMe;



{/* <p>i love math, film, and programming. recently i finished an internship at theorem agency where i worked primarily in reactjs. i created client deliverables for companies such as aflac insurance, the portland trailblazers, and the la galaxy. we worked to both create clean front end experiences, as well as process analytic reports for well informed business decisions. i was trained to program at epicodus in portland. i am enamored with programming and can't wait to see where it takes me next!</p> */}