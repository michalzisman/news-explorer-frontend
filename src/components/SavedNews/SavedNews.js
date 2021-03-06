import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews(props) {
  return (
    <div className="savedNews">
      <SavedNewsHeader
        userName={props.userName}
        savedArticles={props.savedArticles}
        keywords={props.keywords}
      />
      {props.savedArticles.length > 0 && (
        <NewsCardList
          savedArticles={props.savedArticles}
          deleteArticle={props.deleteArticle}
        />
      )}
    </div>
  );
}

export default SavedNews;
