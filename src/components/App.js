import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./Header.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import Neato from "./Neato.jsx";

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <AboutMe />} />
            <Route exact path="/aboutMe" render={() => <AboutMe />} />
            <Route exact path="/projects" render={() => <Projects />} />
            <Route exact path="/contact" render={() => <Contact />} />
            <Route exact path="/neato" render={() => <Neato />} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
