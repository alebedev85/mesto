import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputsList = this._formElement.querySelectorAll('.popup__input');
  }
  ///Collect data of all fields///
  _getInputValues() {
    this._formValues = {};
    this._inputsList.forEach((input) => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }

  setInputValues(data) {
    this._inputsList.forEach((input) => {
      input.value = data[input.name];
    })
  }

  ///Handle form submit///
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    this._formElement.reset();
    super.close()
  }
}
