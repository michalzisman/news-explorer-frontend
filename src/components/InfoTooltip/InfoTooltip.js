function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_type_${props.result} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__overlay" onClick={props.onClose}></div>
      <div className="popup__container">
        <button
          type="button"
          className={`popup__closeBtn popup__closeBtn_${props.result}`}
          aria-label="Close"
          onClick={props.onClose}
        ></button>
        <form className="form form_theme_infoTooltop">
          {/* {props.result ? (
            <> */}
          <p className="form__heading form__heading_theme_infoTooltip">
            Registration successfully completed!
          </p>
          <p
            className="form__switchText form__switchText_theme_infoTooltip"
            onClick={props.handleSwitch}
          >
            Sign in
          </p>
          {/* </>
          ) : (
            <>
              <p className="form__heading">
                Oops, something went wrong! Please try again
              </p>
            </>
          )} */}
        </form>
      </div>
    </div>
  );
}

export default InfoTooltip;
