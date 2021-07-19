import React, { useState } from "react";
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
import DragMe from "./DragMe.jsx";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  const darkStyle = {
    backgroundColor: "rgb(89, 89, 89)",
    color: "white",
  };

  const lightStyle = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <div className="app" style={darkmode ? darkStyle : lightStyle}>
      <Router>
        <div>
          <Header setDarkmode={setDarkmode} darkmode={darkmode} />
          <Switch>
            <Route exact path="/">
              <AboutMe darkmode={darkmode} />
            </Route>
            <Route
              exact
              path="/aboutMe"
              render={() => <AboutMe darkmode={darkmode} />}
            />
            <Route exact path="/projects" render={() => <Projects darkmode={darkmode}/>} />
            <Route exact path="/contact" render={() => <Contact />} />
            <Route exact path="/neato" render={() => <Neato />} />
            <Route exact path="/dragme" render={() => <DragMe />} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
