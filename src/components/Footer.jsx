import React from "react";
import "../css/footer.css";

const Footer = ({ darkmode }) => {
  return (
    <div className={!darkmode ? "footer" : 'footer-dark'}>
      <p className="footerName">Joshua Forman</p>
      <p>cyborgforman@gmail.com</p>
      <a className="footerLink" href="https://github.com/JPForman">
        GitHub
      </a>
      <br></br>
      <a
        className="footerLink"
        href="https://www.linkedin.com/in/joshua-forman/"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default Footer;
