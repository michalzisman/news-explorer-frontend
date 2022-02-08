import notFound from "../../images/not-found.png";

function NothingFound() {
  return (
    <div className="nothingFound">
      <img className="nothingFound__image" src={notFound} alt="Nothing found" />
      <p className="nothingFound__title">Nothing found</p>
      <p className="nothingFound__info">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NothingFound;
