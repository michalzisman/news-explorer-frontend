function SearchForm() {
  function handleSearch() {
    // seach news
  }

  return (
    <form className="searchForm">
      <input className="searchForm__input" placeholder="Enter topic" />
      <button
        type="button"
        onClick={handleSearch}
        className="searchForm__button"
      >
        <p className="searchForm__button-text">Search</p>
      </button>
    </form>
  );
}

export default SearchForm;
