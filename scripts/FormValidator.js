export default class FormValidator {
  constructor(formElement, selectors) {
    this._formElement = formElement;
    this._selectors = selectors;
    this._buttonElement = this._formElement.querySelector(this._selectors.submitButtonSelector);
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
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  //Set State of Button//
  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(this._selectors.inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._selectors.inactiveButtonClass);
    }
  }

  //Set Event Listeners on Inputs and Set State of Button//
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._selectors.inputSelector));
    this._toggleButtonState(inputList);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList);
      });
    });
  };

  //Reset Input Error//
  ResetInputError() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._selectors.inputSelector));
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement, this._selectors);
    });
    this._toggleButtonState(inputList, this._selectors)
  };

  enableValidation() {
    this._setEventListeners()
  };

}
