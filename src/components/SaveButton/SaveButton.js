import React, { useState } from "react";
import saveButton from "../../images/save_hover.png";
import saved from "../../images/saved.png";

function SaveButton() {
  const [savedArticle, setSavedArticle] = useState(false);
  const [isShown, setIsShown] = useState(false);

  function saveArticle() {
    setIsShown(!isShown);
    setSavedArticle(!savedArticle);
  }

  function showWarning() {
    setIsShown(!isShown);
  }

  return (
    <div className="saveButton__content">
      {savedArticle ? (
        <img
          src={saved}
          alt="Saved article"
          className="savedButton"
          onClick={saveArticle}
        />
      ) : (
        <img
          src={saveButton}
          alt="Save article"
          className="saveButton"
          onClick={saveArticle}
          onMouseOver={showWarning}
          onMouseOut={showWarning}
        />
      )}
      {isShown && (
        <div className="saveButton__warning">
          <p className="saveButton__warning-text">Sign in to save articles</p>
        </div>
      )}
    </div>
  );
}

export default SaveButton;
