import React, { useState } from "react";
import deleteButton from "../../images/delete_hover.svg";

function DeleteButton(props) {
  const [isShown, setIsShown] = useState(false);

  function deleteCard() {
    props.deleteCard(props.id);
  }

  function showWarning() {
    setIsShown(!isShown);
  }

  return (
    <div className="deleteButton">
      <img
        src={deleteButton}
        alt="Delete article"
        className="deleteButton__deleteImg"
        onClick={deleteCard}
        onMouseOver={showWarning}
        onMouseOut={showWarning}
      />
      {isShown && (
        <div className="deleteButton__warning">
          <p className="deleteButton__bg-text">Remove from saved</p>
        </div>
      )}
    </div>
  );
}

export default DeleteButton;
