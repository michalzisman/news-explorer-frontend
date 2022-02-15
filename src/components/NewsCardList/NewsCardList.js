import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList(props) {
  const page = window.location.pathname;
  const articles = props.articles;
  const [articlesToRender, setArticlesToRender] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  let key = 0;

  useEffect(() => {
    if (articles && articles.length > 3) {
      setArticlesToRender(articles.slice(0, 3));
    }
  }, [articles]);

  useEffect(() => {
    if (startIndex > 0) {
      const addArticles = articles.slice(startIndex, startIndex + 3);
      setArticlesToRender([...articlesToRender, ...addArticles]);
    }
  }, [startIndex]);

  function showMore() {
    const newIndex = startIndex + 3;
    setStartIndex(newIndex);
  }

  function deleteCard(cardId, ownerId) {
    props.deleteArticle(cardId, ownerId);
  }

  return (
    <div className="newsCardList">
      <div className="newsCardList__cardsWrapper">
        {page === "/" && (
          <>
            {articles !== "undefined" && articlesToRender.length > 0 && (
              <>
                <h2 className="newsCardList__title">Search results</h2>
                <ul className="cards">
                  {articlesToRender.map((card) => {
                    return (
                      <NewsCard
                        key={key++}
                        card={card}
                        id={key}
                        keyword={props.keyword}
                        deleteCard={deleteCard}
                        isLoggedIn={props.isLoggedIn}
                        handleSaveArticle={props.handleSaveArticle}
                        markedAsSaved={props.markedAsSaved}
                      />
                    );
                  })}
                </ul>
              </>
            )}
            {articles !== "undefined" &&
              articles.length > articlesToRender.length && (
                <button
                  type="button"
                  onClick={showMore}
                  className="newsCardList__showMore"
                >
                  <p className="newsCardList__showMore-text">Show more</p>
                </button>
              )}
          </>
        )}

        {page !== "/" && (
          <ul className="cards">
            {props.savedArticles &&
              props.savedArticles.length > 0 &&
              props.savedArticles.map((card) => {
                return (
                  <NewsCard
                    key={key++}
                    card={card}
                    id={key}
                    keyword={card.keyword}
                    deleteCard={deleteCard}
                  />
                );
              })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NewsCardList;
