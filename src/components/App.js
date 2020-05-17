import React from 'react';
import { Switch, Route } from 'react-router-dom';
import "./App.css"
import Header from './Header.jsx'
import AboutMe from './AboutMe.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'


function App() {


  return (
    <div className='app'>
      <Header />

      <Switch>
        <Route exact path='/aboutMe' render={()=><AboutMe />}/>
        <Route exact path='/projects' render={()=><Projects />}/>
        <Route exact path='/contact' render={()=><Contact />}/>
      </Switch>
    </div>
  );
}


export default App;


