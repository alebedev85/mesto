
//Return document object of card///
export default class Card {
  constructor({ name, link, owner, _id, likes }, templatSelector, handleCardClick, userId, openDeletePopup, handelLikeClick) {
    this._titleCard = name;
    this._imageCard = link;
    this._templatSelector = templatSelector;
    this._handleCardClick = handleCardClick;
    this.userId = userId
    this._isOwner = owner._id === userId;
    this._cardId = _id;
    this._likes = likes;
    this._openDeletePopup = openDeletePopup;
    this._handelLikeClick = handelLikeClick
    this._element = this._getTemplate();
    this._CardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');
    this._buttonLike = this._element.querySelector('.element__reaction-button');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._buttonTrash = this._element.querySelector('.element__trash-button');
  }
  //Get template, return template//
  _getTemplate() {
    const card = document
      .querySelector(this._templatSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return card;
  }

  //Set like//
  _setLike(res) {
    console.log(res.likes);
    console.log(res.likes.length);
    this._likeCounter.textContent = res.likes.length
    this._buttonLike.classList.toggle('element__reaction-button_activ');
  }

  _requestLike() {
    console.log(this.userId);
    console.log(this._likes.some(elm => elm._id === this.userId));
    if (this._likes.some(elm => elm._id === this.userId)) {
      this._handelLikeClick.deleteLike(this._cardId).then(res => this._setLike(res))
    } else {
      this._handelLikeClick.putLike(this._cardId).then(res => this._setLike(res))
    }
  }

  // //Delete card//
  // _deleteCard() {
  //   this._DeleteCardApi(this._cardId).then(() => {
  //     this._element.remove();
  //     this._element = null;
  //   })
  // }

  _setEventListeners() {
    this._CardImage.addEventListener('click', () => this._handleCardClick());
    this._buttonLike.addEventListener('click', () => this._requestLike());
    if (this._isOwner) {
      this._buttonTrash.style.visibility = "visible";
      this._buttonTrash.addEventListener('click', () => this._openDeletePopup(this._element, this._cardId))
    }
  }

  //Creat card, return complete element//
  creatCard() {
    this._setEventListeners();
    this._cardTitle.textContent = this._titleCard;
    this._CardImage.src = this._imageCard;
    this._CardImage.alt = `Фото ${this._titleCard}`;
    this._likeCounter.textContent = this._likes.length

    return this._element;
  }
}
