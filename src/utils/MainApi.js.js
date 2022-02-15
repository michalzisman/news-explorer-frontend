const customFetch = (url, headers, body) =>
  fetch(url, headers, body).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`)
  );

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInfo() {
    return customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "GET",
      body: JSON.stringify(),
    });
  }

  getSavedArticles() {
    return customFetch(`${this._baseUrl}/articles`, {
      headers: this._headers,
    });
  }

  saveArticle(keyword, title, text, date, source, link, image) {
    return customFetch(`${this._baseUrl}/articles`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({ keyword, title, text, date, source, link, image }),
    });
  }

  deleteArticle(articleId, ownerId, userId) {
    return customFetch(`${this._baseUrl}/articles/${articleId}`, {
      headers: this._headers,
      method: "DELETE",
      body: JSON.stringify({ ownerId, userId }),
    });
  }

  signin(password, email) {
    return customFetch(`${this._baseUrl}/signin`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        password,
        email,
      }),
    });
  }

  signup(password, email, name) {
    return customFetch(`${this._baseUrl}/signup`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        password,
        email,
        name,
      }),
    });
  }

  tokenValidity(token) {
    return customFetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const mainApi = new MainApi({
  baseUrl: "http://localhost:3000", //https://api.final-project.students.nomoreparties.sbs
  headers: {
    "Access-Control-Allow-Origin": "*",
    authorization: `Bearer ${localStorage.token}`,
    "Content-Type": "application/json",
  },
});

export default mainApi;
