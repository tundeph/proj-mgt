import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav wrapper grey darken-3">
      <div className="container"></div>
      <Link to="/" className="brand-logo">
        ProjMgr
      </Link>
    </nav>
  );
};

export default Navbar;
