import React, { useState, useEffect } from "react";

function PopupWithForm(props) {
  const {
    onClose,
    title,
    buttonText,
    isOpen,
    switchText,
    handleSubmit,
    handleSwitch,
    data,
    hasError,
    requestError,
  } = props;

  const [dataMissing, setDataMissing] = useState(false);

  useEffect(() => {
    if (data) {
      setDataMissing(Object.values(data).some((x) => x === null || x === ""));
    }
  }, [data]);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__container">
        <button
          type="button"
          className="popup__closeBtn"
          aria-label="Close"
          onClick={onClose}
        ></button>
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form__heading">{title}</h2>
          <fieldset className="form__fieldset">
            {props.children}{" "}
            <p
              className={`form__apiError 
              ${title === "Sign up" ? "form__apiError_theme_signup" : ""}
              ${requestError ? "form__apiError_active" : ""}`}
            >
              An error occured.
            </p>
            <button
              type="submit"
              className={`${
                !dataMissing && !hasError
                  ? "form__submit form__submit_Active"
                  : "form__submit"
              }`}
            >
              {buttonText}
            </button>
            <div className="form__switchForm">
              <span className="form__link">or</span>
              <p className="form__switchText" onClick={handleSwitch}>
                {switchText}
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
