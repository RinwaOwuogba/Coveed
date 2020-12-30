import React from "react";
import { Link } from "react-router-dom";

import ExtraLogin from "../../components/ExtraLogin/ExtraLogin";
import PhoneLogin from "../../components/PhoneLogin/PhoneLogin";

import "./sign-up.css";

class signup extends React.Component {
  render() {
    return (
      <div>
        <section className="signup">
          <div className="signup-container">
            <div className="heading">
              <h2>Sign up</h2>
              <em>Create an account</em>
            </div>
            <PhoneLogin signup />
            <ExtraLogin />
            <em className="socials-text">Already have an account?</em>
            <div className="signup-login-btn">
              <Link className="btn" to="/">
                Log In
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default signup;
