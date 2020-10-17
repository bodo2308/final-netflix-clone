import React, { Component } from "react";
import logo from "../svg/logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

import { generateMedia } from "styled-media-query";

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        {/* Headaer top  */}
        <div className="header-top">
          <img className="main-logo" src={logo} alt="main logo"></img>
          <NavLink className="signIn-btn" to="/login">
            Sign In{" "}
          </NavLink>
          <NavLink className="register-btn" to="/register">
            Register{" "}
          </NavLink>
        </div>

        {/* Header content */}
        <div className="slogan">
          <h1 className="slogan-top">Unlimited movies, TV shows, and more.</h1>
          <h3 className="slogan-bottom">Watch anywhere. Cancel anytime.</h3>
          <NavLink className="try-btn" to="/stream">
            Try It Now
          </NavLink>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const HeaderComponent = styled.div`
  // SignIn Button styling
  .signIn-btn {
    right: 10%;
    margin: 1.5rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 300;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1.3rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    curosr: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }

    ${customMedia.lessThan("lgDesktop")`
      margin-top: 1.25rem;
      right:16%;
    `}

    ${customMedia.lessThan("tablet")`
      margin-top: 1.25rem;
      right:30%;
    `}
  }

  .register-btn {
    right: 2%;
    margin: 1.5rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 300;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1.3rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    curosr: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }

    ${customMedia.lessThan("lgDesktop")`
      margin-top: 1.25rem;
      right:6%;
    `}

    ${customMedia.lessThan("tablet")`
    margin-top: 1.25rem;
    right:15%;
    `}

    ${customMedia.lessThan("smTablet")`
    margin-top: 1.25rem;
    right:10%;
    
  `}
  }

  // Try  Button styling
  .try-btn {
    display: inline-block;
    background: var(--main-red);
    text-transform: uppercase;
    border: none;
    outline: none;
    margin: 0 33%;
    padding: 1.5rem;
    border-radius: 0.1875rem;
    font-size: 2rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: background 0.2s ease-in;
    cursor: pointer;
    &:hover {
      background: var(--main-red-hover);
    }

    ${customMedia.lessThan("lgDesktop")`
      margin: 0 33%;
      font-size: 1.5rem;
    `}

    ${customMedia.lessThan("mdDesktop")`
      margin: 0 25%;
      font-size: 1.5rem;
    `}

    ${customMedia.lessThan("tablet")`
      margin: 0 20%;
      font-size: 1.3rem;
    `}
  }

  .Icon svg {
    vertical-align: bottom !important;
    margin-left: 1.5rem;
  }

  a {
    color: #fff;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .slogan-top {
    ${customMedia.lessThan("tablet")`
      margin: 0;
      font-size: 2.3rem;
    `}
  }

  .slogan-bottom {
    ${customMedia.lessThan("tablet")`
      margin: % 0;
      font-size: 1.7rem;
    `}
  }
`;
