import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="Navlink logo">
        Siddhartha
      </NavLink>
      <div className="nav-links">
        <NavLink to="/login" className="Navlink btn login">
          Login
        </NavLink>
        <NavLink to="/register" className="Navlink btn register">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
