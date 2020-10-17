import React, { Component } from "react";
import styled from "styled-components";
import logo from "../svg/logo.svg";
import RegisterForm from "../components/Register/RegisterForm";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="main-login-container">
        <div className="header-top">
        <Link to="/">
          <Logo src={logo} alt="logo_pic" className="logo" />
          </Link>
        </div>

        <RegisterForm />
      </div>
    );
  }
}

export default Register;

const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
