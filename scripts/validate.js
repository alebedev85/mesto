//Show Input Error//
const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass, ...rest }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

//Hide Input Error//
const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass, ...rest }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

//Check Validity for Button//
const checkInputValidity = (formElement, inputElement, rest) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, rest);
  } else {
    hideInputError(formElement, inputElement, rest);
  }
};

//Check Validity for Button//
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

//Set State of Button//
const toggleButtonState = (inputList, buttonElement, { inactiveButtonClass, ...rest }) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

//Set Event Listeners on Inputs and Set State of Button//
const setEventListeners = (formElement, { inputSelector, submitButtonSelector, ...rest }) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, rest);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, rest);
    });
  });
};

//Сreating Array Forms and FormElements//
const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(rest, formElement);
  });
};

//Reset Input Error//
const ResetInputError = (popup, { inputSelector, ...rest }) => {
  const inputList = Array.from(popup.querySelectorAll(inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(popup, inputElement, rest);
  });
};

enableValidation(selectors)

