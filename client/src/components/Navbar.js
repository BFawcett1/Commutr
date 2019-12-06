import React from "react";
import { Link } from "react-router-dom";
import Bus from "../assets/bus.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left-container">
      <div className="navbar__logo-container">
      <Link to="/landing">
        {" "}
        <h1 className="navbar__home">COMMUTR</h1>
      </Link>
      </div>
      <div className="navbar__img-container">
      <img className="navbar__img" src={Bus} />
      </div>
      </div>
      <div className="navbar__right-container">
      <Link to="/form">
        {" "}
        <h1 className="navbar__trip">Trip Tracking</h1>
      </Link>
      <Link to="/">
        {" "}
        <h1 className="navbar__graphs">Graphs</h1>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
