import { popupPicture } from '../scripts/constants.js';
import { renderCard } from '../scripts/utils.js';
import initialCards from '../scripts/cards.js';
import selectors from '../scripts/selectors.js';
import FormValidator from '../components/FormValidator.js';
import Popup from '../components/Popup.js';
import Section from '../components/Section.js';

//VARS//
const formsCollection = {};
const popupAddCard = new Popup('.popup_type_add');

//Cards//
const cardsContainer = document.querySelector('.elements')

//Main Buttons//
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddNewCard = document.querySelector('.profile__add-button');

//Edit Profile Popup//
const popupEditProfile = document.querySelector('.popup_type_edit');

const buttonClosePopupEditProfile = popupEditProfile.querySelector('.popup__close-button');

const formEditProfile = popupEditProfile.querySelector('.popup__form');
const profileNameInput = formEditProfile.querySelector('.popup__input_input_name');
const profileJobInput = formEditProfile.querySelector('.popup__input_input_job');

//Edd Card Popup//
const popupAddCardOld = document.querySelector('.popup_type_add');
// const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close-button');
const formEddCard = popupAddCardOld.querySelector('.popup__form');
const cardNameImput = formEddCard.querySelector('.popup__input_input_place');
const cardLinkImput = formEddCard.querySelector('.popup__input_input_link');

//Picture popup//
const buttonClosePicturePopup = popupPicture.querySelector('.popup__close-button');

//Profile//
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//FUNCTIONS//

//Close Popup with Esc//
function closePopupWithEsc(evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

//Close Popup with Overlay//
function closePopupWithOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
}

//Open Popup//
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupWithEsc);
  document.addEventListener('click', closePopupWithOverlay);
};

//Close Popup//
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupWithEsc);
  document.removeEventListener('click', closePopupWithOverlay);
};

//Handle Edit Form//
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
};

//Handle Add Form//
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  renderCard(cardNameImput.value, cardLinkImput.value);
};

//Form Validation//
function enableValidation({ formSelector, ...rest }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formsCollection[formElement.name] = new FormValidator(formElement, rest);
    formsCollection[formElement.name].enableValidation();
  });
};

//Add Event Listeners//

//Open Edit Popup//
buttonEditProfile.addEventListener('click', () => {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  formsCollection['formEditProfile'].resetInputError();
  openPopup(popupEditProfile);
});

//Close Edit Popup//
buttonClosePopupEditProfile.addEventListener('click', () => closePopup(popupEditProfile));

//Open Add Popup//
buttonAddNewCard.addEventListener('click', () => {
  formsCollection['formAddCard'].resetInputError();
  popupAddCard.open()
  // openPopup(popupAddCard);
});

// //Close Add Popup//
// buttonClosePopupAddCard.addEventListener('click', () => closePopup(popupAddCard));

//Close Edit Picture//
// buttonClosePicturePopup.addEventListener('click', () => closePopup(popupPicture));

//Submit Edit Profile//
formEditProfile.addEventListener('submit', (evt) => {
  handleEditFormSubmit(evt);
  closePopup(popupEditProfile);
});

//Submit Edd Card//
// formEddCard.addEventListener('submit', (evt) => {
//   handleAddFormSubmit(evt);
//   closePopup(popupAddCard);
//   evt.target.reset();
// });

//Main Funtions//

//Creat Cards From Array//
const CardsSection = new Section({
  items: initialCards,
  renderer: renderCard
},
  '.elements')
CardsSection.rendererElements()

//Launch Form Validation//
enableValidation(selectors)
