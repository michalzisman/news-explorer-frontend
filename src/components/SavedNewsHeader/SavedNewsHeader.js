function SavedNewsHeader() {
  return (
    <div className="savedNewsHeader">
      <p className="savedNewsHeader__title">Saved articles</p>
      <h2 className="savedNewsHeader__requestData">
        Elise, you have 5 saved articles
      </h2>
      <p className="savedNewsHeader__byKeywords">
        By keywords:{" "}
        <span className="savedNewsHeader__keywords">
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
