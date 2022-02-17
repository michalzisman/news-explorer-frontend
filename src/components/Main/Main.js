import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import RequestError from "../RequestError/RequestError";

function Main(props) {
  const [isNothingFound, setIsNothingFound] = useState(false);

  useEffect(() => {
    if (props.isSearchError) {
      //nothing
    } else if (
      props.articles !== undefined &&
      props.articles !== null &&
      props.articles.length === 0
      // &&
      // !props.isSearchError
    ) {
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }
  }, [props.articles, props.isSearchError]);

  return (
    <main className="content">
      <div className="search">
        <div className="search__area">
          <h1 className="search__title">What's going on in the world?</h1>
          <h2 className="search__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </h2>
          <SearchForm handleNewsSeasrch={props.handleNewsSeasrch} />
        </div>
      </div>
      {props.articles !== "undefined" &&
        props.articles &&
        props.articles.length > 0 && (
          <NewsCardList
            handleSaveArticle={props.handleSaveArticle}
            articles={props.articles}
            keyword={props.keyword}
            isLoggedIn={props.isLoggedIn}
            markedAsSaved={props.markedAsSaved}
            deleteArticle={props.deleteArticle}
            savedArticles={props.savedArticles}
            markedToDelete={props.markedToDelete}
          />
        )}
      {props.isPreloader && <Preloader />}
      {props.isSearchError && <RequestError />}
      {isNothingFound && <NothingFound />}
      <About />
    </main>
  );
}

export default Main;
