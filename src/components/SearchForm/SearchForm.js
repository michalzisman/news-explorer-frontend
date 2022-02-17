import React, { useState } from "react";

function SearchForm(props) {
  const [searchWord, setSearchWord] = useState("");
  const [searchError, setSearchError] = useState(false);

  function handleSearchWordrdChange(e) {
    setSearchError(false);
    setSearchWord(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (searchWord) {
      props.handleNewsSeasrch(searchWord);
    } else {
      setSearchError(true);
    }
  }

  return (
    <form className="searchForm" onSubmit={handleSearch}>
      <input
        className="searchForm__input"
        value={searchWord}
        onChange={handleSearchWordrdChange}
        placeholder="Enter topic"
      />
      <button
        type="submit"
        // onClick={handleSearch}
        className="searchForm__button"
      >
        <p className="searchForm__button-text">Search</p>
      </button>
      <p
        className={`searchForm__input-error ${
          searchError ? "searchForm__input-error_active" : ""
        }`}
      >
        Please enter a keyword
      </p>
    </form>
  );
}

export default SearchForm;
