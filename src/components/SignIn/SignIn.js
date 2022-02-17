import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
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

  function handleSignIn(e) {
    e.preventDefault();
    props.handleSignIn(email, password);
  }

  return (
    <PopupWithForm
      onClose={props.onClose}
      title="Sign in"
      buttonText="Sign in"
      isOpen={props.isOpen}
      switchText="Sign up"
      handleSubmit={handleSignIn}
      handleSwitch={props.handleSwitch}
      data={{ email, password }}
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
    </PopupWithForm>
  );
}

export default SignIn;
