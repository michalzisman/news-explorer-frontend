import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [props.isOpen]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSignIn(email, password) {
    props.handleSignin(email, password);
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
      data={(email, password)}
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
    </PopupWithForm>
  );
}

export default SignIn;
