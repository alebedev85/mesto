import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = document.querySelector('.popup__form');
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
    super._setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      super.close();
    });
  }
}

// export default class FilterButton {
//   constructor({ data }, buttonSelector) {
//     this._additionalButtonClass = data.buttonClass;
//     this._buttonSelector = buttonSelector;
//   }

//   _getTemplate() {
//   const buttonElement = document
//     .querySelector(this._buttonSelector)
//     .content
//     .querySelector('.filter__button')
//     .cloneNode(true);

//   return buttonElement;
// }

// generateButton() {
//   this._element = this._getTemplate();
//   this._element.classList.add(this._additionalButtonClass);

//   return this._element;
// }
// }

/////////////////////////////////////////////////////////

// //Handle Edit Form//
// function handleEditFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = profileNameInput.value;
//   profileJob.textContent = profileJobInput.value;
// };

// //Handle Add Form//
// function handleAddFormSubmit(evt) {
//   evt.preventDefault();
//   renderCard(cardNameImput.value, cardLinkImput.value);
// };

// //Form Validation//
// function enableValidation({ formSelector, ...rest }) {
//   const formList = Array.from(document.querySelectorAll(formSelector));
//   formList.forEach((formElement) => {
//     formsCollection[formElement.name] = new FormValidator(formElement, rest);
//     formsCollection[formElement.name].enableValidation();
//   });
// };

// //Submit Edit Profile//
// formEditProfile.addEventListener('submit', (evt) => {
//   handleEditFormSubmit(evt);
//   closePopup(popupEditProfile);
// });

// ///Submit Edd Card//
// formEddCard.addEventListener('submit', (evt) => {
//   handleAddFormSubmit(evt);
//   closePopup(popupAddCard);
//   evt.target.reset();
// });
