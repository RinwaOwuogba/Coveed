import React, { Component } from "react";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import PhoneLogin from "../../components/PhoneLogin/PhoneLogin";
import ExtraLogin from "../../components/ExtraLogin/ExtraLogin";
import SignUp from "../../components/SignUp/SignUp";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <LoginHeader />
        <PhoneLogin />
        <ExtraLogin />
        <SignUp />
      </div>
    );
  }
}

export default Login;
