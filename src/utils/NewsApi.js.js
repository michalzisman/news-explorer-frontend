const customFetch = (url, headers) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`)
  );

class NewsApi {
  constructor({ baseUrl, headers, apiKey }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._apiKey = apiKey;
    this._date = new Date();
    this._fromDate = this._date.setDate(this._date.getDate() - 7);
  }

  getArticles(keyword) {
    return customFetch(
      `${this._baseUrl}?q=${keyword}&from=${this._fromDate}&to=${this._date}&pageSize=100&apiKey=${this._apiKey}`
    );
  }
}

const newsApi = new NewsApi({
  apiKey: "98667403e4664ed7ba9c5970d9f861da",
  // baseUrl for deployment: https://nomoreparties.co/news/v2/everything
  baseUrl: "https://newsapi.org/v2/everything", //&apiKey=98667403e4664ed7ba9c5970d9f861da
  headers: {
    "Access-Control-Allow-Origin": "*",
    authorization: `Bearer ${localStorage.token}`,
    "Content-Type": "application/json",
  },
});

export default newsApi;
