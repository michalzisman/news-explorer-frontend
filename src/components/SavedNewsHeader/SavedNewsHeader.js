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
      {/* {props.savedArticles.length === 1 && (
        <p className="savedNewsHeader__byKeywords">
          By keyword:{" "}
          <span className="savedNewsHeader__keywords">
            {props.savedArticles[0].keyword}
          </span>
        </p>
      )}
      {props.savedArticles.length === 2 && (
        <p className="savedNewsHeader__byKeywords">
          {props.savedArticles[0].keyword === props.savedArticles[1].keyword ? (
            <>
              By keyword:{" "}
              <span className="savedNewsHeader__keywords">
                {props.savedArticles[0].keyword}
              </span>
            </>
          ) : (
            <>
              By keywords:{" "}
              <span className="savedNewsHeader__keywords">
                {props.savedArticles[0].keyword} and{" "}
                {props.savedArticles[1].keyword}
              </span>
            </>
          )}
        </p>
      )} */}
    </div>
  );
}

export default SavedNewsHeader;
