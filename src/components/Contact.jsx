import React from "react";
import "../css/contact.css";

const Contact = ({ darkmode }) => {
  return (
    <div className={!darkmode ? "contact" : "contact-dark"}>
      <p className="contactName">Joshua Forman</p>
      <p>cyborgforman@gmail.com</p>
      <a className="contactLink" href="https://github.com/JPForman">
        GitHub
      </a>
      <br></br>
      <a
        className="contactLink"
        href="https://www.linkedin.com/in/joshua-forman/"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default Contact;
