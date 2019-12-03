import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
      <h1 className="navbar__home">COMMUTR</h1>
      </Link>
      <Link to="/form">
        {" "}
        <h1 className="navbar__trip">Trip Tracking</h1>
      </Link>
    </div>
  );
};

export default Navbar;
