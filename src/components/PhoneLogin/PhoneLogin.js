import React from "react";
import { Link } from "react-router-dom";
import "./PhoneLogin.css";

const PhoneLogin = ({ signup }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <input name="phoneNumber" type="tel" placeholder="Phone Number" />

        {signup ? (
          <Link to="/Eval" id="signup-submit" className="signup-submit">
            Sign Up
          </Link>
        ) : (
          <Link to="/Patient" id="signup-submit" className="signup-submit">
            Log In
          </Link>
        )}
      </form>
    </>
  );
};

export default PhoneLogin;
