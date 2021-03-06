import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import newsApi from "../../utils/NewsApi";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import MobileMenuDrawer from "../MovileMenuDrawer/MobileMenuDrawer";
import SignIn from "../SignIn/SignIn";
import Signup from "../Signup/Signup";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useNavigate();
  const [userName, setUserName] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isPreloader, setIsPreloader] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);
  const [mobileMenuDrawer, setMobileMenuDrawer] = useState(false);
  const [isSignInPopup, setIsSignInPopup] = useState(false);
  const [isSignUpPopup, setIsSignUpPopup] = useState(false);
  const [keyword, setKeyword] = useState(localStorage.getItem("keyword"));
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [savedKeywords, setSavedKeywords] = useState(
    JSON.parse(localStorage.getItem("savedKeywords"))
  );
  const [markedAsSaved, setMarkedAsSaved] = useState([]);
  const [markedToDelete, setMarkedToDelete] = useState([]);
  const [requestError, setRequestError] = useState(false);
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem("articles"))
  );

  useEffect(() => {
    if (token) {
      mainApi._headers.authorization = `Bearer ${token}`;
      mainApi
        .getUserInfo()
        .then((res) => {
          setUserName(res.data.name);
          setCurrentUser(res.data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          setUserName("");
          setCurrentUser();
          setIsLoggedIn(false);
        });
    }
  }, [token]);

  useEffect(() => {
    if (currentUser) {
      mainApi
        .getSavedArticles()
        .then((res) => {
          setSavedArticles(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentUser, markedToDelete]);

  useEffect(() => {
    const arr = [];
    if (savedArticles.length === 0) {
      setSavedKeywords([]);
    } else {
      let keywordsObj = {};
      for (let i = 0; i < savedArticles.length; i++) {
        if (!keywordsObj.hasOwnProperty(savedArticles[i].keyword)) {
          arr.push(savedArticles[i].keyword);
          keywordsObj[savedArticles[i].keyword] = savedArticles[i].keyword;
        }
      }
      setSavedKeywords([...arr]);
    }
  }, [savedArticles]);

  useEffect(() => {
    setMarkedToDelete([...markedAsSaved]);
  }, [markedAsSaved]);

  useEffect(() => {
    if (window.history.state.prevUrl) {
      history("/");
      setIsSignInPopup(true);
    }
  }, []);

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

  function getSavedArticles() {
    mainApi
      .getSavedArticles()
      .then((res) => {
        setSavedArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function openMobileMenuDrawer() {
    setMobileMenuDrawer(!mobileMenuDrawer);
  }

  function openSignInPopup() {
    setRequestError(false);
    setIsSignInPopup(true);
  }

  function handleSwitch() {
    setRequestError(false);
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
    setRequestError(false);
    setIsInfoTooltip(false);
    setIsSignInPopup(false);
    setIsSignUpPopup(false);
  }

  function handleSignIn(email, password) {
    mainApi
      .signin(password, email)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setToken(localStorage.getItem("token"));
        setRequestError(false);
        setIsLoggedIn(true);
        setIsSignInPopup(false);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setRequestError(true);
      });
  }

  function handleSignUp(email, password, username) {
    mainApi
      .signup(password, email, username)
      .then((res) => {
        setUserName(res.name);
        setRequestError(false);
        setIsRegistered(true);
      })
      .catch((err) => {
        setRequestError(true);
        setIsRegistered(false);
      })
      .finally(() => {
        setIsInfoTooltip(true);
      });
  }

  function signOut() {
    localStorage.removeItem("token");
    setToken(localStorage.getItem("token"));
    localStorage.removeItem("savedKeywords");
    setSavedKeywords(localStorage.getItem("savedKeywords"));
    setUserName("");
    setCurrentUser();
    setIsLoggedIn(false);
    history("/");
  }

  function handleNewsSeasrch(keyword) {
    localStorage.setItem("keyword", keyword);
    setKeyword(localStorage.getItem("keyword"));
    setIsPreloader(true);
    setArticles(localStorage.removeItem("articles"));
    newsApi
      .getArticles(keyword)
      .then((res) => {
        localStorage.setItem("articles", JSON.stringify(res.articles));
        setArticles(JSON.parse(localStorage.getItem("articles")));
      })
      .catch(() => {
        setIsSearchError(true);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  function handleSaveArticle(
    id,
    keyword,
    title,
    description,
    date,
    source,
    link,
    image
  ) {
    mainApi
      .saveArticle(keyword, title, description, date, source, link, image)
      .then((res) => {
        setMarkedAsSaved([...markedAsSaved, id]);
        setMarkedToDelete([...markedToDelete, res.data.title]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteArticle(articleId, ownerId, id) {
    mainApi
      .deleteArticle(articleId, ownerId, currentUser._id)
      .then((res) => {
        setSavedArticles(
          savedArticles.filter((article) => article._id !== res.data._id)
        );
        if (id !== undefined) {
          removeMarked(id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function removeMarked(id) {
    console.log("Deleted article");
    markedAsSaved.splice(id, 1);
    setMarkedAsSaved([...markedAsSaved]);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          setMobileMenuDrawer={openMobileMenuDrawer}
          openSignInPopup={openSignInPopup}
          signOut={signOut}
          userName={userName}
          isLoggedIn={isLoggedIn}
        />
        {mobileMenuDrawer && <MobileMenuDrawer />}
        <SignIn
          isOpen={isSignInPopup}
          onClose={closePopups}
          handleSignIn={handleSignIn}
          handleSwitch={handleSwitch}
          requestError={requestError}
        />
        <Signup
          isOpen={isSignUpPopup}
          onClose={closePopups}
          handleSignUp={handleSignUp}
          handleSwitch={handleSwitch}
          requestError={requestError}
        />
        <InfoTooltip
          isOpen={isInfoTooltip}
          onClose={closePopups}
          handleSwitch={handleSwitch}
          isRegistered={isRegistered}
        ></InfoTooltip>
        <Routes>
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute token={token}>
                {currentUser && (
                  <SavedNews
                    savedArticles={savedArticles}
                    keywords={savedKeywords}
                    userName={userName}
                    deleteArticle={deleteArticle}
                    getSavedArticles={getSavedArticles}
                  />
                )}
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <Main
                handleNewsSeasrch={handleNewsSeasrch}
                handleSaveArticle={handleSaveArticle}
                deleteArticle={deleteArticle}
                articles={articles}
                isPreloader={isPreloader}
                isSearchError={isSearchError}
                keyword={keyword}
                isLoggedIn={isLoggedIn}
                markedAsSaved={markedAsSaved}
                savedArticles={savedArticles}
                markedToDelete={markedToDelete}
              />
            }
          />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
