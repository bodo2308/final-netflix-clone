import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";

const regexp = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

class RegisterForm extends Component {
  state = initState;

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  // Validate
  validate = () => {
    let inputError = false;
    const errors = {
      emailError: "",
      passwordError: "",
    };

    if (!this.state.email) {
      inputError = true;
      errors.emailError = "Please enter a valid email";
    } else if (!this.state.email.match(regexp)) {
      inputError = true;
      errors.emailError = (
        <span style={{ color: "red" }}>Your email must be valid </span>
      );
    }

    if (this.state.password.length < 4) {
      inputError = true;
      errors.passwordError =
        "Your password must be between 4 and 16 characters";
    }

    this.setState({
      ...errors,
    });

    return inputError;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const err = this.validate();
    if (!err) {
      this.setState(initState);
    }

    axios
      .post("https://netflix-clone-nathan.herokuapp.com/auth/register", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.props.history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <FormContainer>
        <div className="form-container">
          <form>
            <h2>Sign Up For A New Account</h2>

            <div className="input-container">
              <input
                className="input-empty"
                onChange={this.handleFirstNameChange}
                type="text"
                required={true}
                value={this.state.firstName}
              />

              <label>First Name</label>
            </div>

            <div className="input-container">
              <input
                className="input-empty"
                onChange={this.handleLastNameChange}
                type="text"
                required={true}
                value={this.state.lastName}
              />

              <label>Last Name</label>
            </div>

            <div className="input-container">
              <input
                className="input-empty"
                onChange={this.handleEmailChange}
                type="email"
                required={true}
                value={this.state.email}
              />

              <label>Email</label>
              <span>{this.state.emailError}</span>
            </div>
            <div className="input-container">
              <input
                className="input-empty"
                onChange={this.handlePasswordChange}
                type="password"
                required={true}
                value={this.state.password}
              />
              <label>Password</label>
              <span>{this.state.passwordError}</span>
            </div>
            <div className="input-container">
              <Button onClick={(e) => this.onSubmit(e)} type="Submit">
                Sign Up
              </Button>
            </div>

            <Link className="already" to="/login">
              Already Have An Account ?
            </Link>
          </form>
        </div>
      </FormContainer>
    );
  }
}

export default withRouter(RegisterForm);

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;

  .form-container {
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    width: 130%;
    height: 41.25rem;
    padding: 4rem;
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1.2rem;
  }

  .input-empty {
    color: #fff;
    background: #333;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    padding: 0.9rem 1.25rem 0;
  }

  form div label {
    position: absolute;
    top: 0.325rem;
    left: 1.25rem;
    pointer-event: none;
    color: #8a8a8a;
    font-size: 1rem;
    transition: transform 150ms ease-out, font-size 150ms ease-out;
  }

  form div {
    position: relative;
  }

  input:focus ~ label {
    top: 0.4375rem;
    font-size: 0.7rem;
  }

  input:focus {
    outline: none;
  }

  .already {
    text-decoration: none;
    color: #828282;
    margin-left: 12rem;
    font-size: 0.9rem;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }
`;

const Button = styled.button`
  color: #fff;
  background: rgba(229, 9, 20);
  border: none;
  outline: none;
  padding: 0.8rem 1.3rem;
  border-radius: 0.125rem;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: opacity 0.2 ease-in;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem 0;
`;
