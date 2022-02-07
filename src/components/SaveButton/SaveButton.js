import React, { useState } from "react";
import saveButton from "../../images/save_hover.svg";
import saved from "../../images/saved.svg";

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
    <div className="saveButton">
      {savedArticle ? (
        <img
          src={saved}
          alt="Saved article"
          className="saveButton__savedImg"
          onClick={saveArticle}
        />
      ) : (
        <img
          src={saveButton}
          alt="Save article"
          className="saveButton__saveImg"
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
