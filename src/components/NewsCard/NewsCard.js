import SaveButton from "../SaveButton/SaveButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import rectangle from "../../images/rectangle.png";

function NewsCard(props) {
  const page = window.location.pathname;
  const { card } = props;

  function deleteCard(id) {
    props.deleteCard(id);
  }

  return (
    <div className="newsCard">
      <img src={rectangle} alt="Card button" className="newsCard__button" />
      {page === "/" ? (
        <SaveButton />
      ) : (
        <DeleteButton id={props.id} deleteCard={deleteCard} />
      )}
      <div className="newsCard__keyword">
        <p className="newsCard__keyword-text">{card.keyword}</p>
      </div>
      <img className="newsCard__image" src={card.image} alt={card.name} />
      <div className="newsCard__info">
        <p className="newsCard__date">{card.date}</p>
        <p className="newsCard__title">{card.title}</p>
        <p className="newsCard__text">{card.text}</p>
        <p className="newsCard__publisher">{card.publisher}</p>
      </div>
    </div>
  );
}

export default NewsCard;
