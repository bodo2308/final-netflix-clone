import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../svg/logo.svg";
import "../css/Nav.css";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actions/authActions";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ onFormSubmit }) => {
  
  const [show, handleShow] = useState(false);
  const dispatch = useDispatch();

  // Make the nav change background when scroll to a certain point

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <NavComponent className={`nav ${show && "nav_black"}`}>
      <Link to="/">
        <img className="nav_logo" src={logo} alt="main logo"></img>
      </Link>

      <div className="nav_links">
        <Link to="/stream">
          <h4 className="nav_link">Movies</h4>
        </Link>
        <Link to="/stream/tv">
          <h4 className="nav_link">TV Shows</h4>
        </Link>
      </div>

      <SearchBar onFormSubmit={onFormSubmit} />

      {/*Logout button, remove token from local storage when clicked on*/}

      <NavLink className="logOut-btn" to="/"  onClick={() => {
          dispatch(logOut());
          localStorage.removeItem("userEmail");
          localStorage.removeItem("jwt");
        }}>
            Log Out{" "}
          </NavLink>

      
    </NavComponent>
  );
};

export default Nav;

const NavComponent = styled.div`
.logOut-btn {
  right: 0%;
  margin: 0rem 1% 0;
  padding: 0.3rem 0.5rem;
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
`;