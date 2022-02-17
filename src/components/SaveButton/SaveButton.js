import React, { useState } from "react";
import saveButton from "../../images/save_hover.svg";
import saved from "../../images/saved.svg";

function SaveButton(props) {
  const [isShown, setIsShown] = useState(false);

  function showWarning() {
    setIsShown(!isShown);
  }

  return (
    <div className="saveButton">
      {props.isLoggedIn ? (
        <img
          src={props.isLiked ? saved : saveButton}
          alt="Saved article"
          className={
            props.isLiked ? "saveButton__savedImg" : "saveButton__saveImg"
          }
          onClick={props.isLiked ? props.deleteCard : props.handleSaveArticle}
        />
      ) : (
        <>
          <img
            src={saveButton}
            alt="Save article"
            className="saveButton__saveImg"
            onMouseOver={showWarning}
            onMouseOut={showWarning}
          />
          {isShown && !props.isLoggedIn && (
            <div className="saveButton__warning">
              <p className="saveButton__warning-text">
                Sign in to save articles
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SaveButton;
