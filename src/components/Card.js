
//Return document object of card///
export default class Card {
  constructor({ name, link, owner, _id, likes }, templateSelector, handleCardClick, userId, openDeletePopup, handleLike) {
    this._titleCard = name;
    this._imageCard = link;
    this._templatSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this.userId = userId
    this._isOwner = owner._id === userId;
    this._cardId = _id;
    this._likes = likes;
    this._hasMyLike = this._likes.some(elm => elm._id === this.userId)
    this._handleDeleteCard = openDeletePopup;
    this._handleLike = handleLike
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
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

  //Update like//
  updateLikes(likes) {
    this._hasMyLike = likes.some(elm => elm._id === this.userId)
    this._likeCounter.textContent = likes.length
    this._buttonLike.classList.toggle('element__reaction-button_activ');
  }

  _handleLikeClick() {
    if (this._hasMyLike) {
      this._handleLike.deleteLike(this._cardId, this);
    } else {
      this._handleLike.addLike(this._cardId, this);
    }
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleCardClick());
    this._buttonLike.addEventListener('click', () => this._handleLikeClick());
    if (this._isOwner) {
      this._buttonTrash.style.visibility = "visible";
      this._buttonTrash.addEventListener('click', () => this._handleDeleteCard({id: this._cardId, element: this}))
    }
  }

  //Creat card, return complete element//
  createCard() {
    this._setEventListeners();
    this._cardTitle.textContent = this._titleCard;
    this._cardImage.src = this._imageCard;
    this._cardImage.alt = `Фото ${this._titleCard}`;
    if (this._hasMyLike) this._buttonLike.classList.add('element__reaction-button_activ');
    this._likeCounter.textContent = this._likes.length

    return this._element;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }
}
