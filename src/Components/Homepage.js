import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <h1>
          Welcome to <span>React JS</span> Login & Register Page
        </h1>
        <NavLink to="/login" className="Navlink btn login start">
          Let's Started
        </NavLink>
      </div>
    </>
  );
};

export default Homepage;
