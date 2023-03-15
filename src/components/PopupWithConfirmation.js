import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
  }

  setCallback(submitCb) {
    this._handleSubmit = submitCb;
  }

  open(id, element) {
    super.open();
    this._cardId = id;
    this._element = element;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._cardId, this._element);
    });
  }
}
