import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import MobileMenuDrawer from "../MovileMenuDrawer/MobileMenuDrawer";
import SignIn from "../SignIn/SignIn";
import Signup from "../Signup/Signup";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const history = useNavigate();
  const [mobileMenuDrawer, setMobileMenuDrawer] = useState(false);
  const [isSignInPopup, setIsSignInPopup] = useState(false);
  const [isSignUpPopup, setIsSignUpPopup] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);

  const handleEscKey = useCallback((event) => {
    if (event.key === "Escape") {
      closePopups();
    }
  }, []);

  useEffect(() => {
    // add all possible popups to if statement
    if (isSignInPopup || isSignUpPopup || isInfoTooltip) {
      window.addEventListener("keyup", handleEscKey);
    } else {
      window.removeEventListener("keyup", handleEscKey);
    }
  }, [isSignInPopup, isSignUpPopup, isInfoTooltip, handleEscKey]); // add all possible popups to dependencies

  function openMobileMenuDrawer() {
    setMobileMenuDrawer(!mobileMenuDrawer);
  }

  function openSignInPopup() {
    setIsSignInPopup(true);
  }

  function handleSwitch() {
    if (isInfoTooltip || isSignUpPopup) {
      setIsInfoTooltip(false);
      setIsSignUpPopup(false);
      setIsSignInPopup(true);
    } else {
      setIsSignInPopup(false);
      setIsSignUpPopup(true);
    }
  }

  function closePopups() {
    setIsInfoTooltip(false);
    setIsSignInPopup(false);
    setIsSignUpPopup(false);
  }

  function handleSignIn(email, password) {
    console.log("Signed in");
    // handle log in
  }

  function handleSignUp(email, password, username) {
    console.log("Signed up");
    // handle registration
  }

  function signOut() {
    // log out user
    history("/");
  }

  return (
    <div className="App">
      <Header
        setMobileMenuDrawer={openMobileMenuDrawer}
        openSignInPopup={openSignInPopup}
        signOut={signOut}
      />
      {mobileMenuDrawer && <MobileMenuDrawer />}
      <SignIn
        isOpen={isSignInPopup}
        onClose={closePopups}
        handleSignIn={handleSignIn}
        handleSwitch={handleSwitch}
      />
      <Signup
        isOpen={isSignUpPopup}
        onClose={closePopups}
        handleSignUp={handleSignUp}
        handleSwitch={handleSwitch}
      />
      <InfoTooltip
        isOpen={isInfoTooltip}
        onClose={closePopups}
        handleSwitch={handleSwitch}
      ></InfoTooltip>
      <Routes>
        <Route path="saved-news" element={<SavedNews />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
