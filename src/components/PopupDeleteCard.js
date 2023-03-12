import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, deleteCard) {
    super(popupSelector);
    this._deleteCardApi = deleteCard;
    this._formElement = this._popup.querySelector('.popup__form');
  }

  open(element, id) {
    super.open();
    this._element = element;
    this._cardId = id;
  }

  _deleteCard() {
    this._deleteCardApi(this._cardId).then(() => {
      this._element.remove();
      this._element = null;
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteCard();
      this.close();
    });
  }
}
