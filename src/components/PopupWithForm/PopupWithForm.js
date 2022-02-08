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
  } = props;

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
            <button
              type="submit"
              className={`${
                data ? "form__submit form__submit_Active" : "form__submit"
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
