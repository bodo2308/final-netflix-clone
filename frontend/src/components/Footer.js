import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <span style={{ marginLeft: "18%", fontSize: "1.25rem" }}>
          Questions? Call 1-844-505-2993
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Investor Relations</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Corporate Information</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Account</Link>
            </li>
            <li>
              <Link>Redeem Gift Cards</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Media Center</Link>
            </li>
            <li>
              <Link>Buy Gift Cards</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
            </li>
            <li>
              <Link>Legal Notices</Link>
            </li>
          </ul>
        </div>
        <span style={{ marginLeft: "80%", fontSize: "1.25rem" }}>
          Copyrighted by Nhat Do @ 2020
        </span>
      </FooterContainer>
    );
  }
}

export default Footer;

const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 5rem;
  padding-bottom: 3rem;
  color: #999;
  margin: 0.5rem auto 0;
  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #999;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
