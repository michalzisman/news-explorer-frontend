import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import MobileMenuIcon from "../MobileMenuIcon/MobileMenuIcon";
import logoBlack from "../../images/logo.png";
import logoWhite from "../../images/logo-white.png";

function Header(props) {
  const page = window.location.pathname;
  const [logo, setLogo] = useState(logoBlack);
  const [mobileMenuIsOpen, setMobileMenuIsOpenn] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    if (page === "/" || (page !== "/" && mobileMenuIsOpen)) {
      setLogo(logoWhite);
    } else {
      setLogo(logoBlack);
    }
  }, [page, mobileMenuIsOpen]);

  function handleMenuClick() {
    history("/");
  }

  function setOpenMenu() {
    setMobileMenuIsOpenn(!mobileMenuIsOpen);
    if (logo === logoWhite && page !== "/") {
      setLogo(logoBlack);
    } else {
      setLogo(logoWhite);
    }
    props.setMobileMenuDrawer();
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          onClick={handleMenuClick}
          className="logo"
          src={logo}
          alt="NewsExplorer logo"
        />
        <Navigation
          mobileMenuIsOpen={mobileMenuIsOpen}
          openSignInPopup={props.openSignInPopup}
          signOut={props.signOut}
          userName={props.userName}
          isLoggedIn={props.isLoggedIn}
        />
        <MobileMenuIcon
          setOpenMenu={setOpenMenu}
          mobileMenuIsOpen={mobileMenuIsOpen}
        />
      </div>
    </header>
  );
}

export default Header;
