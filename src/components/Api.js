class Api {
  constractor() { }

  getUserInfo() {
    const p = fetch('https://mesto.nomoreparties.co/v1/cohort-61/users/me', {
      headers: {
        authorization: '3e070c18-b10f-4e80-b715-68fa3cc00268'
      }
    })
    return p.then(res => {
      if (res.ok) {
        return res.json()
      } else Promise.reject(`Ошибка: ${res.status}`)
    })
  }

  aditUserInfo() {
    const p = fetch('https://mesto.nomoreparties.co/v1/cohort-61/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '3e070c18-b10f-4e80-b715-68fa3cc00268',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Marie Skłodowska Curie',
        about: 'Physicist and Chemist'
      })
    });
    return p.then(res => {
      if (res.ok) {
        return res.json()
      } else Promise.reject(`Ошибка: ${res.status}`)
    })
  }

  getCards() {
    const p = fetch('https://mesto.nomoreparties.co/v1/cohort-61/cards', {
      headers: {
        authorization: '3e070c18-b10f-4e80-b715-68fa3cc00268'
      }
    })
    return p.then(res => {
      if (res.ok) {
        return res.json()
      } else Promise.reject(`Ошибка: ${res.status}`)
    })
  }

  addNewCard(item) {
    const p = fetch('https://mesto.nomoreparties.co/v1/cohort-61/cards', {
      method: 'POST',
      headers: {
        authorization: '3e070c18-b10f-4e80-b715-68fa3cc00268',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    return p.then(res => {
      if (res.ok) {
        return res.json()
      } else Promise.reject(`Ошибка: ${res.status}`)
    })
  }
}

export default Api
