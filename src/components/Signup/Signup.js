import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [hasError, setHasError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [hasNameError, setHasNameError] = useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
  }, [props.isOpen]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (
      !e.target.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setHasEmailError(true);
      setHasError(true);
    } else {
      setHasEmailError(false);
      setHasError(false);
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (!e.target.value) {
      setHasPasswordError(true);
      setHasError(true);
    } else {
      setHasPasswordError(false);
      setHasError(false);
    }
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
    if (!e.target.value) {
      setHasNameError(true);
      setHasError(true);
    } else {
      setHasNameError(false);
      setHasError(false);
    }
  }

  function handleSignUp(e) {
    e.preventDefault();
    props.handleSignUp(email, password, username);
  }

  return (
    <PopupWithForm
      onClose={props.onClose}
      title="Sign up"
      buttonText="Sign up"
      isOpen={props.isOpen}
      switchText="Sign in"
      handleSubmit={handleSignUp}
      handleSwitch={props.handleSwitch}
      data={{ email, password, username }}
      hasError={hasError}
      requestError={props.requestError}
    >
      <label className="form__label">
        Email
        <input
          type="email"
          className="form__input"
          name="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="Enter email"
          required
          noValidate
        />
        <span
          className={`form__input-error ${
            hasEmailError ? "form__input-error_active email-input-error" : ""
          }`}
        >
          Invalid email address
        </span>
      </label>

      <label className="form__label">
        Password
        <input
          type="password"
          className="form__input"
          name="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Enter password"
          autoComplete=""
          required
          minLength="8"
          noValidate
        />
        <span
          className={`form__input-error ${
            hasPasswordError
              ? "form__input-error_active password-input-error"
              : ""
          }`}
        >
          Invalid password
        </span>
      </label>
      <label className="form__label">
        Username
        <input
          className="form__input"
          name="username"
          onChange={handleUsernameChange}
          value={username}
          placeholder="Enter your username"
          autoComplete=""
          required
          minLength="2"
          maxLength="30"
          noValidate
        />
        <span
          className={`form__input-error ${
            hasNameError ? "form__input-error_active username-input-error" : ""
          } `}
        >
          Invalid username
        </span>
      </label>
    </PopupWithForm>
  );
}

export default Signup;
