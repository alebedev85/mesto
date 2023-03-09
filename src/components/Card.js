
//Return document object of card///
export default class Card {
  constructor({ name, link, owner, _id }, templatSelector, handleCardClick, userId, deleteCard) {
    this._titleCard = name;
    this._imageCard = link;
    this._templatSelector = templatSelector;
    this._handleCardClick = handleCardClick;
    this._isOwner = owner._id === userId;
    this._cardId = _id;
    this._DeleteCardApi = deleteCard;
    this._element = this._getTemplate();
    this._newCardImage = this._element.querySelector('.element__image');
    this._newcardTitle = this._element.querySelector('.element__title');
    this._buttonLike = this._element.querySelector('.element__reaction-button');
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
  _setLike(element) {
    element.classList.toggle('element__reaction-button_activ');
  }

  //Delete card//
  _deleteCard() {
    this._DeleteCardApi(this._cardId).then(() => {
      this._element.remove();
      this._element = null;
    })
  }

  _setEventListeners() {
    this._newCardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
    this._buttonLike.addEventListener('click', () => this._setLike(this._buttonLike));
    if (this._isOwner) {
      this._buttonTrash.style.visibility = "visible";
      this._buttonTrash.addEventListener('click', () => this._deleteCard())
    }

  }

  //Creat card, return complete element//
  creatCard() {
    this._setEventListeners();
    this._newcardTitle.textContent = this._titleCard;
    this._newCardImage.src = this._imageCard;
    this._newCardImage.alt = `Фото ${this._titleCard}`;
    return this._element;
  }
}
