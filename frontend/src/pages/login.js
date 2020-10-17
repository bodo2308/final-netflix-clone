import React, { Component } from "react";
import styled from "styled-components";
import logo from "../svg/logo.svg";
import LoginForm from "../components/Login/LoginForm";
import { Link } from "react-router-dom";
import "../css/Login.css";

class Login extends Component {
  render() {
    return (
      <div className="main-login-container">
        <div className="header-top">
        <Link to="/">
          <Logo src={logo} alt="logo_pic" className="logo" />
        </Link>
        </div>

        <LoginForm />
      </div>
    );
  }
}

export default Login;

const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
