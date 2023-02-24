import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
  }
  ///Collect data of all fields///
  _getInputValues() {
    this._inputsList = this._formElement.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputsList.forEach((input) => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }

  ///Handle form submit///
  _setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      evt.target.reset();
      super.close();
    });
    super._setEventListeners();
  }
}
