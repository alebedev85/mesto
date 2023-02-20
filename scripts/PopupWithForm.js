import { Popup } from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._formElement = document.querySelector('.popup__form');
    this._item = {};
  }
  ///Collect data of all fields///
  _getInputValues() {
    const inputsList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    inputsList.forEach((elm) => {
      this._item[elm.name] = elm.value;
    })
  }

  _setEventListeners() {
    super._setEventListeners();
    this._formElement .addEventListener('submit', (evt) => {
      this._callbackSubmit(evt, this._item);
      super.close();
    });

  }
}

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
