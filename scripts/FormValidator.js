export default class FormValidator {
  constructor(formElement, selectors) {
    this._formElement = formElement;
    this._selectors = selectors;
  }

  //Show Input Error//
  _showInputError(formElement, inputElement, errorMessage, { inputErrorClass, errorClass, ...rest }) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  //Hide Input Error//
  _hideInputError(formElement, inputElement, { inputErrorClass, errorClass, ...rest }) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

  //Check Input Validity/
  _checkInputValidity(formElement, inputElement, rest) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, rest);
    } else {
      this._hideInputError(formElement, inputElement, rest);
    }
  };

  //Check Validity for Button//
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  //Set State of Button//
  _toggleButtonState(inputList, buttonElement, { inactiveButtonClass, ...rest }) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
    }
  }

  //Set Event Listeners on Inputs and Set State of Button//
  setEventListeners({ inputSelector, submitButtonSelector, ...rest }) {
    const formElement = this._formElement
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, rest);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, rest);
        this._toggleButtonState(inputList, buttonElement, rest);
      });
    });
  };

  enableValidation() {
    this.setEventListeners(this._selectors)
  };

}
