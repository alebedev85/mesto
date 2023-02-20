// import { imagePicturPopup, titlePicturPopup, popupPicture } from './utils.js';
import PopupWithImage from './PopupWithImage.js';

//Return document object of card///
export default class Card {
  constructor(titleCard, imageCard, templatSelector) {
    this._titleCard = titleCard;
    this._imageCard = imageCard;
    this._templatSelector = templatSelector;
    this._popup = new PopupWithImage('.popup_type_picture');
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
    this._element.remove();
    this._element = null;
  }

  //Creat card, return complete element//
  creatCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.element__image');
    const cardTitle = this._element.querySelector('.element__title');

    cardImage.addEventListener('click', () => {
      this._popup.open(cardImage, cardTitle);
      // imagePicturPopup.src = cardImage.src;
      // imagePicturPopup.alt = `Фото ${cardTitle}`;
      // titlePicturPopup.textContent = cardTitle.textContent;
      // this._openPopup(popupPicture);
    });

    const buttonLike = this._element.querySelector('.element__reaction-button');
    buttonLike.addEventListener('click', () => this._setLike(buttonLike));

    const buttonTrash = this._element.querySelector('.element__trash-button');
    buttonTrash.addEventListener('click', () => this._deleteCard());

    cardTitle.textContent = this._titleCard;
    cardImage.src = this._imageCard;
    cardImage.alt = `Фото ${this._titleCard}`;
    return this._element;
  }
}
