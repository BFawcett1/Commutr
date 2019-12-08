import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info-container">
      <a className="footer__info" target="_blank" href="https://github.com/BFawcett1">Github</a>
      <a className="footer__info" target="_blank" href="https://linkedin.com/in/bencfawcett">| LinkedIn |</a>
      <p className="footer__info">fawcett.ben@gmail.com</p>
    </div>
    </div>
  );
};

export default Footer;
