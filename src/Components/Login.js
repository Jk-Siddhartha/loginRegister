import React from "react";
import Navbar from "./Navbar";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login-page-container">
          <img
            src="https://images.pexels.com/photos/3585090/pexels-photo-3585090.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="login-img"
            className="login-hero-img"
          />
          <div className="login-page-fields">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
              alt="login-img"
              className="login-logo"
            />
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
            />
            <button className="btn login">Login</button>
            <p>
              Not registered Yet..
              <NavLink to="/register" className="Navlink">
                Click Here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
