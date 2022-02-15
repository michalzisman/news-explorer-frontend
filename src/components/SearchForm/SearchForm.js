import React, { useState } from "react";

function SearchForm(props) {
  const [searchWord, setSearchWord] = useState("");

  function handleSearchWordrdChange(e) {
    setSearchWord(e.target.value);
  }

  function handleSearch(e) {
    if (searchWord) {
      e.preventDefault();
      props.handleNewsSeasrch(searchWord);
    } else {
      document
        .querySelector(".searchForm__input-error")
        .classList.add("searchForm__input-error_active");
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
      <p className="searchForm__input-error">Please enter a keyword</p>
    </form>
  );
}

export default SearchForm;
