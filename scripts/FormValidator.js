export default class FormValidator {
  constructor(formElement, selectors) {
    this._formElement = formElement;
    this._selectors = selectors;
    this._buttonElement = this._formElement.querySelector(this._selectors.submitButtonSelector);
  }

  //Show Input Error//
  _showInputError(inputElement, errorMessage, { inputErrorClass, errorClass, ...rest }) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  //Hide Input Error//
  _hideInputError(inputElement, { inputErrorClass, errorClass, ...rest }) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

  //Check Input Validity/
  _checkInputValidity(inputElement, rest) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage, rest);
    } else {
      this._hideInputError(inputElement, rest);
    }
  };

  //Check Validity for Button//
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  //Set State of Button//
  _toggleButtonState(inputList, { inactiveButtonClass, ...rest }) {
    if (this._hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(inactiveButtonClass);
    }
  }

  //Set Event Listeners on Inputs and Set State of Button//
  _setEventListeners({ inputSelector, submitButtonSelector, ...rest }) {
    const inputList = Array.from(this._formElement.querySelectorAll(inputSelector));
    this._toggleButtonState(inputList, rest);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement, rest);
        this._toggleButtonState(inputList, rest);
      });
    });
  };

  enableValidation() {
    this._setEventListeners(this._selectors)
  };

}
