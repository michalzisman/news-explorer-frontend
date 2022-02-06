import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import exitBlack from "../../images/logout-black.png";
import exitWhite from "../../images/logout-white.png";

function Navigation(props) {
  const homeText = "Home";
  const savedText = "Saved Articles";
  const page = window.location.pathname;
  const user = props.user ? props.user : "Sign in";
  const [exit, setExit] = useState(exitBlack);

  useEffect(() => {
    if (page === "/") {
      setExit(exitWhite);
    } else if (props.mobileMenuIsOpen) {
      setExit(exitWhite);
    } else {
      setExit(exitBlack);
    }
  }, [page, props.mobileMenuIsOpen]);

  const history = useNavigate();

  function handleMenuClick(event) {
    // if (event.target.alt && )
    if (event.target.textContent === homeText) {
      history("/");
    } else if (event.target.textContent === savedText) {
      history("/saved-news");
    } else if (event.target.textContent === user || event.target.alt) {
      // If button is Sign in, open popup
      props.openSignInPopup();
      // If button is a user's name, log out user
      // props.signOut();
    }
  }

  return (
    <div
      className={`${
        window.screen.width <= 600
          ? `header_nav_mobile ${
              props.mobileMenuIsOpen ? "header_nav_mobile_open" : ""
            }`
          : "header_nav"
      }`}
    >
      <button
        type="button"
        onClick={handleMenuClick}
        className={`header__button ${
          page === "/"
            ? "header__button_selected header__button_selected_white"
            : ""
        }`}
      >
        <p
          className={`header__button-text ${
            page === "/" ? "header__button-text_white" : ""
          }`}
        >
          {homeText}
        </p>
      </button>
      <button
        type="button"
        onClick={handleMenuClick}
        className={`header__button ${
          page === "/saved-news" ? "header__button_selected" : ""
        }`}
      >
        <p
          className={`header__button-text ${
            page === "/" ? "header__button-text_white" : ""
          }`}
        >
          {savedText}
        </p>
      </button>
      <button
        type="button"
        onClick={handleMenuClick}
        className="header__button"
      >
        <p
          className={`header__button-text ${
            page === "/" ? "header__button-text_white" : ""
          }`}
        >
          {user}
        </p>
        <img
          src={exit}
          alt="logout"
          className="header__button-logout"
          onClick={handleMenuClick}
        />
      </button>
    </div>
  );
}

export default Navigation;
