import React, { useState, useEffect } from "react";
import SaveButton from "../SaveButton/SaveButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import rectangle from "../../images/rectangle.svg";
import noImage from "../../images/no_image.png";

function NewsCard(props) {
  const [date, setDate] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (props.markedAsSaved && props.markedAsSaved.length > 0) {
      setIsLiked(props.markedAsSaved.some((i) => i === props.id));
      console.log(props.markedAsSaved, props.markedToDelete);
    }
  }, [props.markedToDelete]);

  useEffect(() => {
    const date = props.card.date
      ? props.card.date.slice(0, 10)
      : props.card.publishedAt.slice(0, 10);
    const date2 = new Date(date);
    setDate(
      `${date2.toLocaleString("default", {
        month: "long",
      })} ${date2.getDate()}, ${date2.getFullYear()}`
    );
  }, [props.card.publishedAt]);

  const page = window.location.pathname;
  const { card } = props;

  function deleteCard() {
    if (!card._id) {
      const articleId = props.savedArticles.filter(
        (article) => article.title === card.title
      );
      setIsLiked(false);
      props.deleteCard(articleId[0]._id, articleId[0].owner, props.id);
    } else {
      props.deleteCard(card._id, card.owner);
    }
  }

  function handleSaveArticle() {
    props.handleSaveArticle(
      props.id,
      props.keyword,
      card.title,
      card.description,
      date,
      card.source.name,
      card.url,
      card.urlToImage
    );
  }

  return (
    <div className="newsCard">
      <img src={rectangle} alt="Card button" className="newsCard__button" />
      {page === "/" ? (
        <SaveButton
          isLoggedIn={props.isLoggedIn}
          isLiked={isLiked}
          handleSaveArticle={handleSaveArticle}
          deleteCard={deleteCard}
        />
      ) : (
        <DeleteButton deleteCard={deleteCard} />
      )}
      <div className="newsCard__keyword">
        <p className="newsCard__keyword-text">{props.keyword}</p>
      </div>
      {card.urlToImage && (
        <img
          className="newsCard__image"
          src={card.urlToImage}
          alt={card.title}
        />
      )}
      {card.image && (
        <img className="newsCard__image" src={card.image} alt={card.title} />
      )}

      {!card.image && !card.urlToImage && (
        <img className="newsCard__image" src={noImage} alt="" />
      )}
      <div className="newsCard__info">
        <p className="newsCard__date">{date}</p>
        <h2 className="newsCard__title">{card.title}</h2>
        <p className="newsCard__text">
          {card.description ? card.description : card.text}
        </p>
        <p className="newsCard__publisher">
          {card.source.name ? card.source.name : card.source}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
