function SavedNewsHeader(props) {
  return (
    <div className="savedNewsHeader">
      <p className="savedNewsHeader__title">Saved articles</p>
      <h2 className="savedNewsHeader__requestData">
        {props.savedArticles.length > 0
          ? `${props.userName}, you have ${props.savedArticles.length} saved articles`
          : `${props.userName}, you have no saved articles`}
      </h2>
      {props.keywords && props.keywords.length === 0 && <></>}
      {props.keywords && props.keywords.length === 1 && (
        <p className="savedNewsHeader__byKeywords">
          By keyword:{" "}
          <span className="savedNewsHeader__keywords">{props.keywords[0]}</span>
        </p>
      )}
      {props.keywords && props.keywords.length === 2 && (
        <p className="savedNewsHeader__byKeywords">
          By keywords:{" "}
          <span className="savedNewsHeader__keywords">
            {props.keywords[0]} and {props.keywords[1]}
          </span>
        </p>
      )}
      {props.keywords && props.keywords.length > 2 && (
        <p className="savedNewsHeader__byKeywords">
          By keywords:{" "}
          <span className="savedNewsHeader__keywords">
            {props.keywords[0]}, {props.keywords[1]} and{" "}
            {props.keywords.length - 2} other
          </span>
        </p>
      )}
    </div>
  );
}

export default SavedNewsHeader;
