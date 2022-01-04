import React from "react";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";

const Navbar = () => {
  return (
    <nav className="nav wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          EzProjects
        </Link>
        <SignedinLinks />
      </div>
    </nav>
  );
};

export default Navbar;
