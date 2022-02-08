import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
// import NothingFound from "../NothingFound/NothingFound";
// import Preloader from "../Preloader/Preloader";

function Main() {
  return (
    <main className="content">
      <div className="search">
        <div className="search__area">
          <h1 className="search__title">What's going on in the world?</h1>
          <h2 className="search__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </h2>
          <SearchForm />
        </div>
      </div>
      {/* <Preloader /> */}
      <NewsCardList />
      {/* <NothingFound /> */}
      <About />
    </main>
  );
}

export default Main;
