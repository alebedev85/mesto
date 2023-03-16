export default class FormValidator {
  constructor(formElement, selectors) {
    this._formElement = formElement;
    this._selectors = selectors;
    this._buttonElement = this._formElement.querySelector(this._selectors.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._selectors.inputSelector));
  }

  //Show Input Error//
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._selectors.errorClass);
  };

  //Hide Input Error//
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._selectors.inputErrorClass);
    errorElement.classList.remove(this._selectors.errorClass);
    errorElement.textContent = '';
  };

  //Check Input Validity/
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  //Check Validity for Button//
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  //Set State of Button//
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._selectors.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._selectors.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');

    }
  }

  //Set Event Listeners on Inputs and Set State of Button//
  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  //Reset Input Error//
  resetInputError() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState()
  };

  enableValidation() {
    this._setEventListeners()
  };

}
