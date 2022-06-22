import React, { useState } from "react";
import Navbar from "./Navbar";
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const registerUser = () => {
    const { name, email, password, cpassword } = userRegistration;

    if (password !== cpassword) {
      alert("invalid credentials");
    } else {
      console.log(userRegistration);
      alert(`welcome ${name}`);
      setUserRegistration({ name: "", email: "", password: "", cpassword: "" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-page">
        <div className="register-page-container">
          <img
            src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="regisgter-img"
            className="register-hero-img"
          />
          <div className="register-page-fields">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2921/2921222.png"
              alt="register-logo"
              className="register-logo"
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              value={userRegistration.name}
              onChange={handleInput}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={userRegistration.email}
              onChange={handleInput}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={userRegistration.password}
              onChange={handleInput}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type="password"
              name="cpassword"
              value={userRegistration.cpassword}
              onChange={handleInput}
            />
            <button className="btn register" onClick={registerUser}>
              Register
            </button>
            <p>
              Already registered login here ...
              <NavLink to="/login">Click Here</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
