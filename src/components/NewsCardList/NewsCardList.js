import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import temporaryCards from "../../temporaryCards";

function NewsCardList() {
  const page = window.location.pathname;
  const [cards, setCards] = useState(temporaryCards);

  function showMore() {
    // show more cards
  }

  function deleteCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <div className="newsCardList">
      {page === "/" ? (
        <h2 className="newsCardList__title">Search results</h2>
      ) : (
        ""
      )}
      <div className="cards">
        {page === "/"
          ? cards.slice(0, 3).map((card) => {
              return (
                <NewsCard
                  key={card.id}
                  card={card}
                  id={card.id}
                  keyword={card.keyword}
                  deleteCard={deleteCard}
                />
              );
            })
          : cards.map((card) => {
              return (
                <NewsCard
                  key={card.id}
                  card={card}
                  id={card.id}
                  keyword={card.keyword}
                  deleteCard={deleteCard}
                />
              );
            })}
      </div>
      {page === "/" ? (
        <button
          type="button"
          onClick={showMore}
          className="newsCardList__showMore"
        >
          <p className="newsCardList__showMore-text">Show more</p>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default NewsCardList;
