import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
  }, [props.isOpen]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleSignUp(email, password, username) {
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
      data={(email, password, username)}
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
        <span className="form__input-error form__input-error_active email-input-error">
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
        <span className="form__input-error form__input-error_active password-input-error">
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
          noValidate
        />
        <span className="form__input-error form__input-error_active username-input-error">
          Invalid username
        </span>
      </label>
    </PopupWithForm>
  );
}

export default Signup;
