import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews() {
  return (
    <div className="savedNews">
      <SavedNewsHeader />
      <NewsCardList />
    </div>
  );
}

export default SavedNews;
