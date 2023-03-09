class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  _getHeaders() {
    return {
      authorization: this._token,
      "Content-Type": 'application/json'
    }
  }

  _getJson(res) {
    if (res.ok) {
      return res.json()
    } else Promise.reject(`Ошибка: ${res.status}`)
  }

  getCurrentUser() {
    const p = fetch(`${this._url}/users/me`, {
      headers: this._getHeaders()
    })
    return p.then(res => this._getJson(res))
  }

  getUserInfo() {
    const p = fetch(`${this._url}/users/me`, {
      headers: this._getHeaders()
    })
    return p.then(res => this._getJson(res))
  }

  aditUserInfo() {
    const p = fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: 'Marie Skłodowska Curie',
        about: 'Physicist and Chemist'
      })
    });
    return p.then(res => this._getJson(res))
  }

  getCards() {
    const p = fetch(`${this._url}/cards`, {
      headers: this._getHeaders()
    })
    return p.then(res => this._getJson(res))
  }

  addNewCard(item) {
    const p = fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify(item)
    });
    return p.then(res => this._getJson(res))
  }
}

export default Api
